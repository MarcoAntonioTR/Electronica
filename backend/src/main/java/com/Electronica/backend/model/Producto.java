package com.Electronica.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "producto")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Producto {
    @Id
    private int idProducto;
    @Column(name = "nombre" , length = 100)
    private String Nombre;
    @Column(name = "descripcion" , length = 225)
    private String Descripcion;
    @Column(name = "precio")
    private double Precio;
    @Column(name = "stockMinimo")
    private int StockMinimo;
    @Column(name = "stock")
    private int Stock;
    @ManyToOne
    @JoinColumn(name = "idCategoria")
    private Categoria Categoria;
    @Column(name = "estado")
    private boolean Estado;
}
