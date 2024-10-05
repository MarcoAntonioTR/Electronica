package com.Electronica.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cliente")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Cliente {
    @Id
    private int idCliente;
    @Column(name = "nombre", length = 100)
    private String Nombre;
    @Column(name = "apellido", length = 100)
    private String Apellido;
    @Column(name = "email", length = 100)
    private String Email;
    @Column(name = "telefono", length = 9)
    private String Telefono;
    @Column(name = "dni", length = 8)
    private String Dni;
    @Column(name = "usuario", length = 225)
    private String Usuario;    
    @Column(name = "contrasena", length = 225)
    private String Contrasena;
    @Column(name = "estado")
    private boolean Estado;
}
