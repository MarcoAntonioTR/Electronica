package com.Electronica.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SeguridadConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Deshabilitar CSRF, usa lambda para las nuevas versiones
                .authorizeHttpRequests(auth -> {
                    auth.anyRequest().authenticated(); // Requiere autenticación para todas las solicitudes
                })
                .httpBasic(withDefaults()); // Habilitar autenticación básica

        return http.build(); // Nueva forma de construir la configuración
    }
}
