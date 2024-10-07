package com.Electronica.backend.service;

import com.Electronica.backend.model.Proveedores;

import java.util.List;
import java.util.Optional;

public interface ProveedoresService {
    List<Proveedores> Listar();
    Proveedores agregar(Proveedores proveedores);
    Proveedores actualizar(Proveedores proveedores);
    Optional<Proveedores> buscarPorId(int id);
    void eliminar(int id);
}
