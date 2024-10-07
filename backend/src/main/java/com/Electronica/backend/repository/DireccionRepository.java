package com.Electronica.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Electronica.backend.model.Direccion;

@Repository
public interface DireccionRepository extends JpaRepository<Direccion, Integer> {
    
}
