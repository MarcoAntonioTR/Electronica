package com.Electronica.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Electronica.backend.model.Cliente;
import com.Electronica.backend.service.ClienteService;

@RestController
@RequestMapping("/Clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    // Listar todos los clientes usando el método GET
    @GetMapping("/Listar")
    public ResponseEntity<List<Cliente>> Listar() {
        List<Cliente> clientes = clienteService.Listar();
        return ResponseEntity.ok(clientes);
    }

    // Crear un nuevo cliente usando el método POST
    @PostMapping("/AgregarCliente")
    public ResponseEntity<Cliente> registrar(@RequestBody Cliente cliente) {
        Cliente nuevoCliente = clienteService.agregar(cliente);
        return ResponseEntity.ok(nuevoCliente);
    }

    // Buscar un cliente por su ID usando el método GET
    @GetMapping("/BuscarCliente/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable int id) {
        return clienteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Actualizar un cliente usando el método PUT
    @PutMapping("/ActualizarCliente/{id}")
    public ResponseEntity<Cliente> actualizar(@PathVariable int id, @RequestBody Cliente clienteDetalles) {
        return clienteService.buscarPorId(id).map(clienteExistente -> {
            clienteExistente.setNombre(clienteDetalles.getNombre());
            clienteExistente.setApellido(clienteDetalles.getApellido());
            clienteExistente.setEmail(clienteDetalles.getEmail());
            clienteExistente.setTelefono(clienteDetalles.getTelefono());
            clienteExistente.setDni(clienteDetalles.getDni());
            clienteExistente.setUsuario(clienteDetalles.getUsuario());
            clienteExistente.setContrasena(clienteDetalles.getContrasena());
            clienteExistente.setEstado(clienteDetalles.isEstado());
            Cliente clienteActualizado = clienteService.actualizar(clienteExistente);
            return ResponseEntity.ok(clienteActualizado);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un cliente usando el método DELETE
    @DeleteMapping("/EliminarCliente/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable int id) {
        Optional<Cliente> cliente = clienteService.buscarPorId(id);
        if (cliente.isPresent()) {
            clienteService.eliminar(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
