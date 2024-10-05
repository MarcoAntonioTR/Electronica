package com.Electronica.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SeguridadConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Deshabilitar CSRF para facilitar las pruebas (cuidado en producción)
                .authorizeHttpRequests()
                .anyRequest().authenticated() // Requiere autenticación para todas las solicitudes
                .and()
                .httpBasic(); // Habilitar autenticación básica

        return http.build();
    }
}
