package com.Electronica.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "direccion")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Direccion {
    @Id
    private int idDireccion;
    @Column(name = "descripcion", length = 100)
    private String Descripcion;
    @Column(name = "departamento", length = 50)
    private String Departamento;
    @Column(name = "provincia", length = 50)
    private String Provincia;
    @Column(name = "distrito", length = 50)
    private String Distrito;

}
