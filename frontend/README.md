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

src <br/>
├── assets            // Archivos estáticos como imágenes, fuentes, etc.<br/>
├── components        // Componentes reutilizables del proyecto. <br/>
│   ├── common        // Componentes comunes utilizados en múltiples partes de la aplicación.<br/>
│   ├── hooks         // Hooks personalizados para manejar la lógica de estado y efectos.<br/>
│   ├── layout        // Componentes de diseño de la interfaz de usuario (Header, Footer, etc.).<br/>
├── config            // Configuraciones globales de la aplicación (APIs, entornos, etc.). <br/>
├── constants         // Constantes utilizadas en toda la aplicación.<br/>
├── routes            // Configuración de las rutas de la aplicación. <br/>
├── services          // Servicios para la comunicación con APIs o manejo de lógica de negocio. <br/>
├── stateManagement   // Manejo de estado global de la aplicación (Redux, Context API, etc.). <br/>
├── styles            // Archivos de estilos globales y específicos. <br/>
├── tests             // Archivos de pruebas unitarias e integración. <br/>
├── utils             // Funciones utilitarias para facilitar el manejo de datos y lógica. <br/>
└── views             // Vistas principales de la aplicación. <br/>
    ├── Home          // Vista de la página principal. <br/>
    └── Login         // Vista de la página de login. <br/>
