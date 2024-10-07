package com.Electronica.backend.service;

import com.Electronica.backend.model.Producto;

import java.util.List;
import java.util.Optional;

public interface ProductoService {
    List<Producto> Listar();
    Producto agregar(Producto producto);
    Producto actualizar(Producto producto);
    Optional<Producto> buscarPorId(int id);
    void eliminar(int id);
}
