package com.Electronica.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Electronica.backend.model.Categoria;
import com.Electronica.backend.service.CategoriaService;

@RestController
@RequestMapping("/Categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    // Listar todos los clientes usando el método GET
    @GetMapping("/Listar")
    public ResponseEntity<List<Categoria>> Listar() {
        List<Categoria> categorias = categoriaService.Listar();
        return ResponseEntity.ok(categorias);
    }

    // Crear un nuevo cliente usando el método POST
    @PostMapping("/AgregarCategoria")
    public ResponseEntity<Categoria> registrar(@RequestBody Categoria categoria) {
        Categoria nuevaCategoria = categoriaService.agregar(categoria);
        return ResponseEntity.ok(nuevaCategoria);
    }

    // Buscar un cliente por su ID usando el método GET
    @GetMapping("/BuscarCategoria/{id}")
    public ResponseEntity<Categoria> buscarPorId(@PathVariable int id) {
        return categoriaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Actualizar un cliente usando el método PUT
    @PutMapping("/ActualizarCategoria/{id}")
    public ResponseEntity<Categoria> actualizar(@PathVariable int id, @RequestBody Categoria categoriaDetalles) {
        return categoriaService.buscarPorId(id).map(categoriaExistente -> {
            categoriaExistente.setNombre(categoriaDetalles.getNombre());
            categoriaExistente.setDescripcion(categoriaDetalles.getDescripcion());
            Categoria categoriaActualizado = categoriaService.actualizar(categoriaExistente);
            return ResponseEntity.ok(categoriaActualizado);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un cliente usando el método DELETE
    @DeleteMapping("/EliminarCategoria/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable int id) {
        Optional<Categoria> categoria = categoriaService.buscarPorId(id);
        if (categoria.isPresent()) {
            categoriaService.eliminar(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
