package com.Electronica.backend.service.impl;

import com.Electronica.backend.model.Producto;
import com.Electronica.backend.repository.ProductoRepository;
import com.Electronica.backend.service.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public List<Producto> Listar() {
        return productoRepository.findAll();
    }

    @Override
    public Producto agregar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Producto actualizar(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Optional<Producto> buscarPorId(int id) {
        return productoRepository.findById(id);
    }

    @Override
    public void eliminar(int id) {
        productoRepository.deleteById(id);
    }
}
