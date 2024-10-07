package com.Electronica.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Electronica.backend.model.Proveedores;
import com.Electronica.backend.service.ProveedoresService;

@RestController
@RequestMapping("/Proveedores")
public class ProveedoresController {

    @Autowired
    private ProveedoresService proveedoresService;

    // Listar todos los clientes usando el método GET
    @GetMapping("/Listar")
    public ResponseEntity<List<Proveedores>> Listar() {
        List<Proveedores> proveedores = proveedoresService.Listar();
        return ResponseEntity.ok(proveedores);
    }

    // Crear un nuevo cliente usando el método POST
    @PostMapping("/AgregarProveedor")
    public ResponseEntity<Proveedores> registrar(@RequestBody Proveedores proveedores) {
        Proveedores nuevoProveedores = proveedoresService.agregar(proveedores);
        return ResponseEntity.ok(nuevoProveedores);
    }

    // Buscar un cliente por su ID usando el método GET
    @GetMapping("/BuscarProveedor/{id}")
    public ResponseEntity<Proveedores> buscarPorId(@PathVariable int id) {
        return proveedoresService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Actualizar un cliente usando el método PUT
    @PutMapping("/ActualizarProveedor/{id}")
    public ResponseEntity<Proveedores> actualizar(@PathVariable int id, @RequestBody Proveedores proveedoresDetalles) {
        return proveedoresService.buscarPorId(id).map(proveedorExistente -> {
            proveedorExistente.setNombre(proveedoresDetalles.getNombre());
            proveedorExistente.setRuc(proveedoresDetalles.getRuc());
            proveedorExistente.setEmail(proveedoresDetalles.getEmail());
            proveedorExistente.setTelefono(proveedoresDetalles.getTelefono());
            proveedorExistente.setDireccion(proveedoresDetalles.getDireccion());
            proveedorExistente.setEstado(proveedoresDetalles.isEstado());
            Proveedores proveedorActualizado = proveedoresService.actualizar(proveedorExistente);
            return ResponseEntity.ok(proveedorActualizado);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un cliente usando el método DELETE
    @DeleteMapping("/EliminarProveedor/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable int id) {
        Optional<Proveedores> proveedores = proveedoresService.buscarPorId(id);
        if (proveedores.isPresent()) {
            proveedoresService.eliminar(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
