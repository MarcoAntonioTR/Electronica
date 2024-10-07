package com.Electronica.backend.service.impl;

import com.Electronica.backend.model.Categoria;
import com.Electronica.backend.repository.CategoriaRepository;
import com.Electronica.backend.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Override
    public List<Categoria> Listar() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria agregar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Categoria actualizar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Optional<Categoria> buscarPorId(int id) {
        return categoriaRepository.findById(id);
    }

    @Override
    public void eliminar(int id) {
        categoriaRepository.deleteById(id);
    }
}
