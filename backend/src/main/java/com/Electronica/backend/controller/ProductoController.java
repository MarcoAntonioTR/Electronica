package com.Electronica.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Electronica.backend.model.Producto;
import com.Electronica.backend.service.ProductoService;


@RestController
@RequestMapping("/Productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // Listar todos los clientes usando el método GET
    @GetMapping("/Listar")
    public ResponseEntity<List<Producto>> Listar() {
        List<Producto> productos = productoService.Listar();
        return ResponseEntity.ok(productos);
    }

    // Crear un nuevo cliente usando el método POST
    @PostMapping("/AgregarProducto")
    public ResponseEntity<Producto> registrar(@RequestBody Producto producto) {
        Producto nuevoProducto = productoService.agregar(producto);
        return ResponseEntity.ok(nuevoProducto);
    }

    // Buscar un cliente por su ID usando el método GET
    @GetMapping("/BuscarProducto/{id}")
    public ResponseEntity<Producto> buscarPorId(@PathVariable int id) {
        return productoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Actualizar un cliente usando el método PUT
    @PutMapping("/ActualizarProducto/{id}")
    public ResponseEntity<Producto> actualizar(@PathVariable int id, @RequestBody Producto productoDetalles) {
        return productoService.buscarPorId(id).map(productoExistente -> {
            productoExistente.setNombre(productoDetalles.getNombre());
            productoExistente.setDescripcion(productoDetalles.getDescripcion());
            productoExistente.setPrecio(productoDetalles.getPrecio());
            productoExistente.setStockMinimo(productoDetalles.getStockMinimo());
            productoExistente.setStock(productoDetalles.getStock());
            productoExistente.setIdCategoria(productoDetalles.getIdCategoria());
            productoExistente.setEstado(productoDetalles.isEstado());
            Producto productoActualizado = productoService.actualizar(productoExistente);
            return ResponseEntity.ok(productoActualizado);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un cliente usando el método DELETE
    @DeleteMapping("/EliminarProducto/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable int id) {
        Optional<Producto> producto = productoService.buscarPorId(id);
        if (producto.isPresent()) {
            productoService.eliminar(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
