package com.Electronica.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //Esta clase es una entidad
@Table(name = "Administrador")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Administrador {
    @Id
    private int idAdmin;
    @Column(name = "nombre", length = 50)
    private String Nombre;
    @Column(name = "apellido", length = 50)
    private String Apellido;
    @Column(name = "email", length = 50)
    private String Email;
    @Column(name = "contrasena", length = 50)
    private String Contrasena;
    @Column(name = "telefono", length = 9)
    private String Telefono;
    @Column(name = "estado")
    private boolean Estado;
}

