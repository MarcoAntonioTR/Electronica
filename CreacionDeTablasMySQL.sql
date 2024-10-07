-- Estructura de tabla para la tabla `Admin`
CREATE TABLE Administrador (
  idAdmin INT AUTO_INCREMENT PRIMARY KEY,  -- Asegúrate de que sea la clave primaria
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  contrasena VARCHAR(50) NOT NULL,
  telefono VARCHAR(9) NOT NULL,
  estado BIT DEFAULT 1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `direccion`
CREATE TABLE direccion (
  idDireccion INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(100) NOT NULL,
  departamento VARCHAR(50) NOT NULL,
  provincia VARCHAR(50) NOT NULL,
  distrito VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `cliente`
CREATE TABLE cliente (
  idCliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefono VARCHAR(9) NOT NULL,
  dni VARCHAR(8) NOT NULL,
  usuario VARCHAR(225) NOT NULL,
  contrasena VARCHAR(225) NOT NULL,
  estado BIT DEFAULT 1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura tabla `lciente_direccion`
CREATE TABLE cliente_direccion (
  idClienteDireccion INT AUTO_INCREMENT PRIMARY KEY,
  idCliente INT NOT NULL,
  idDireccion INT NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente),
  FOREIGN KEY (idDireccion) REFERENCES direccion(idDireccion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `categoria`
CREATE TABLE categoria (
  idCategoria INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `proveedores`
CREATE TABLE proveedores (
  idProveedor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  ruc VARCHAR(15) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefono VARCHAR(15) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  estado BIT DEFAULT 1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `producto`
CREATE TABLE producto (
  idProducto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(225) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL, 
  stockMinimo INT NOT NULL,
  stock INT NOT NULL,
  idCategoria INT NOT NULL,
  estado BIT DEFAULT 1 NOT NULL,
  FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `carrito`
CREATE TABLE carrito (
  idCarrito INT AUTO_INCREMENT PRIMARY KEY,
  cantCarrito INT NOT NULL,
  idCliente INT NULL,
  idProducto INT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `metodo_pago`
CREATE TABLE metodo_pago (
  idPago INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(50) NOT NULL,
  idCarrito INT NULL,
  detallesPago VARCHAR(255) NULL,
  FOREIGN KEY (idCarrito) REFERENCES carrito(idCarrito)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `pedido`
CREATE TABLE pedido (
  idPedido INT AUTO_INCREMENT PRIMARY KEY,
  idCliente INT NOT NULL,
  fechaPedido DATETIME NOT NULL,
  estado VARCHAR(50) NOT NULL, -- Ejemplo: "Pendiente", "Enviado", "Entregado"
  total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `detalle_pedido`
CREATE TABLE detalle_pedido (
  idDetallePedido INT AUTO_INCREMENT PRIMARY KEY,
  idPedido INT NOT NULL,
  idProducto INT NOT NULL,
  cantidad INT NOT NULL,
  precioUnitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (idPedido) REFERENCES pedido(idPedido),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `orden`
CREATE TABLE orden (
  idOrden INT AUTO_INCREMENT PRIMARY KEY,
  idProveedor INT NOT NULL,
  fechaOrden DATETIME NOT NULL,
  estado VARCHAR(50) NOT NULL, -- Ejemplo: "En Proceso", "Recibido"
  total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (idProveedor) REFERENCES proveedores(idProveedor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Estructura de tabla para la tabla `detalle_orden`
CREATE TABLE detalle_orden (
  idDetalleOrden INT AUTO_INCREMENT PRIMARY KEY,
  idOrden INT NOT NULL,
  idProducto INT NOT NULL,
  cantidad INT NOT NULL,
  precioUnitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (idOrden) REFERENCES orden(idOrden),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

