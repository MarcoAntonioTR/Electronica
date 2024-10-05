package com.Electronica.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "proveedores")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Proveedores {
    @Id
    private int idProveedor;
    @Column(name = "nombre", length = 100)
    private String Nombre;
    @Column(name = "ruc", length = 15)
    private String Ruc;
    @Column(name = "email", length = 100)
    private String Email;
    @Column(name = "telefono", length = 15)
    private String Telefono;
    @Column(name = "direccion", length = 255)
    private String Direccion;
    @Column(name = "estado")
    private boolean Estado;
}
