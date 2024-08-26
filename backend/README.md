# Tienda Tecnológica

## Descripción

Este proyecto es una aplicación de tienda de tecnologica. Está construido utilizando Java, Spring Boot, y React. La estructura del proyecto sigue los principios MVC y DAO, y utiliza Spring Security para la gestión de la seguridad.

## Estructura del Proyecto

### Backend

com
└── sirenah
    └── backend
        ├── config           // Configuraciones de la aplicación (Spring Security, JPA, etc.)
        ├── controller       // Controladores que gestionan las peticiones HTTP y responden con vistas o datos
        ├── dto              // Objetos de Transferencia de Datos (DTO) que encapsulan datos para la comunicación entre capas
        ├── exception        // Manejo de excepciones personalizadas
        ├── model            // Clases de modelo que representan las entidades del dominio
        ├── repository       // Interfaces de repositorio que extienden Spring Data JPA para la persistencia de datos
        ├── service          // Servicios que contienen la lógica de negocio
        │   └── impl         // Implementaciones de los servicios definidos en la capa de servicios
        ├── util             // Clases de utilidad para funciones auxiliares y comunes
        ├── App.java         // Clase principal que arranca la aplicación Spring Boot
        └── security         // Configuraciones y componentes de seguridad (Spring Security)

