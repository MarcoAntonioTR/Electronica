package com.Electronica.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Electronica.backend.model.Administrador;
import com.Electronica.backend.service.AdministradorService;

@RestController
@RequestMapping("/Administradores")
public class AdministradorController {

    @Autowired
    private AdministradorService administradorService;

    // Listar todos los administradores usamos el metodo GET
    @GetMapping("/Listar")
    public ResponseEntity<List<Administrador>> Listar() {
        List<Administrador> administradores = administradorService.Listar();
        return ResponseEntity.ok(administradores);
    }

    // Crear un nuevo administrador usamos el metodo POST
    @PostMapping("/AgregarAdmin")
    public ResponseEntity<Administrador> registrar(@RequestBody Administrador administrador) {
        Administrador nuevoAdmin = administradorService.agregar(administrador);
        return ResponseEntity.ok(nuevoAdmin);
    }
    
    // Buscar un administrador por su ID usamos el metodo GET
    @GetMapping("/BuscarAdmin/{id}")
    public ResponseEntity<Administrador> buscarPorId(@PathVariable int id) {
        return administradorService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Actualizar un administrador usamos el metodo PUT
    @PutMapping("/ActualizarAdmin/{id}")
    public ResponseEntity<Administrador> actualizar(@PathVariable int id, @RequestBody Administrador administradorDetalles) {
        return administradorService.buscarPorId(id).map(adminExistente -> {
            adminExistente.setNombre(administradorDetalles.getNombre());
            adminExistente.setApellido(administradorDetalles.getApellido());
            adminExistente.setEmail(administradorDetalles.getEmail());
            adminExistente.setContrasena(administradorDetalles.getContrasena());
            adminExistente.setTelefono(administradorDetalles.getTelefono());
            adminExistente.setEstado(administradorDetalles.isEstado());
            Administrador adminActualizado = administradorService.actualizar(adminExistente);
            return ResponseEntity.ok(adminActualizado);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/EliminarAdmin/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable int id) {
        Optional<Administrador> admin = administradorService.buscarPorId(id);
        if (admin.isPresent()) {
            System.out.println(id);
            administradorService.eliminar(id);
            //Si el administrador existe y se elimina correctamente, deberías recibir un código de estado 204 No Content
            return ResponseEntity.noContent().build();
        } else {
            //Si el ID no existe, deberías recibir un código de estado 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }
}
