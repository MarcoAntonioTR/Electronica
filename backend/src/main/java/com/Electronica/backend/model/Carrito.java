package com.Electronica.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "carrito")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Carrito {
    @Id
    private int idCarrito;
    @ManyToOne
    @JoinColumn(name = "idCliente")
    private Cliente Cliente;
    @ManyToOne
    @JoinColumn(name = "idProducto")
    private Producto Producto;
}

