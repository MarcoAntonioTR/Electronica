package com.Electronica.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Electronica.backend.model.Direccion;
import com.Electronica.backend.service.DireccionService;


@RestController
@RequestMapping("/Direcciones")
public class DireccionController {

    @Autowired
    private DireccionService direccionService;

    // Listar todos los clientes usando el método GET
    @GetMapping("/Listar")
    public ResponseEntity<List<Direccion>> Listar() {
        List<Direccion> direccions = direccionService.Listar();
        return ResponseEntity.ok(direccions);
    }

    // Crear un nuevo cliente usando el método POST
    @PostMapping("/AgregarDireccion")
    public ResponseEntity<Direccion> registrar(@RequestBody Direccion direccion) {
        Direccion nuevaDireccion = direccionService.agregar(direccion);
        return ResponseEntity.ok(nuevaDireccion);
    }

    // Buscar un cliente por su ID usando el método GET
    @GetMapping("/BuscarDireccion/{id}")
    public ResponseEntity<Direccion> buscarPorId(@PathVariable int id) {
        return direccionService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Actualizar un cliente usando el método PUT
    @PutMapping("/ActualizarDireccion/{id}")
    public ResponseEntity<Direccion> actualizar(@PathVariable int id, @RequestBody Direccion direccionDetalles) {
        return direccionService.buscarPorId(id).map(direccionExistente -> {
            direccionExistente.setDescripcion(direccionDetalles.getDescripcion());
            direccionExistente.setDepartamento(direccionDetalles.getDepartamento());
            direccionExistente.setProvincia(direccionDetalles.getProvincia());
            direccionExistente.setDistrito(direccionDetalles.getDistrito());
            Direccion direccionActualizada = direccionService.actualizar(direccionExistente);
            return ResponseEntity.ok(direccionActualizada);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un cliente usando el método DELETE
    @DeleteMapping("/EliminarDireccion/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable int id) {
        Optional<Direccion> direccion = direccionService.buscarPorId(id);
        if (direccion.isPresent()) {
            direccionService.eliminar(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
