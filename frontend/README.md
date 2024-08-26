# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Tienda Tecnológica

## Descripción

Este proyecto es una aplicación de tienda Tecnológica. Está construido utilizando Java, Spring Boot, y React. La estructura del proyecto sigue los principios MVC y DAO, y utiliza Spring Security para la gestión de la seguridad.

## Estructura del Proyecto

### Frontend

src
├── assets            // Archivos estáticos como imágenes, fuentes, etc.
├── components        // Componentes reutilizables del proyecto
│   ├── common        // Componentes comunes utilizados en múltiples partes de la aplicación
│   ├── hooks         // Hooks personalizados para manejar la lógica de estado y efectos
│   ├── layout        // Componentes de diseño de la interfaz de usuario (Header, Footer, etc.)
├── config            // Configuraciones globales de la aplicación (APIs, entornos, etc.)
├── constants         // Constantes utilizadas en toda la aplicación
├── routes            // Configuración de las rutas de la aplicación
├── services          // Servicios para la comunicación con APIs o manejo de lógica de negocio
├── stateManagement   // Manejo de estado global de la aplicación (Redux, Context API, etc.)
├── styles            // Archivos de estilos globales y específicos
├── tests             // Archivos de pruebas unitarias e integración
├── utils             // Funciones utilitarias para facilitar el manejo de datos y lógica
└── views             // Vistas principales de la aplicación
    ├── Home          // Vista de la página principal
    └── Login         // Vista de la página de login
