package com.Electronica.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Electronica.backend.model.Proveedores;

@Repository
public interface ProveedoresRepository extends JpaRepository<Proveedores, Integer> {
    
}
