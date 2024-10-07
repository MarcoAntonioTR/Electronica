package com.Electronica.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "categoria")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Categoria {
    @Id
    private int idCategoria;
    @Column(name = "nombre" , length = 100)
    private String Nombre;
    @Column(name = "descripcion" , length = 100)
    private String Descripcion;
}
