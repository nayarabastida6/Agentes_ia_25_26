# Checklist manual CRUD HTTP ✅

## Parte 1: Configuración inicial del proyecto
- [x] Inicialización del proyecto
    - [x] Crear carpeta del proyecto `manual-http-[nombre-iniciales-apellidos]`
    - [x] Inicializar proyecto Node.js con `npm init`
    - [x] Completar los datos del proyecto (nombre, versión, descripción y autor)
- [x] Instalación de dependencias
    - [x] json-server
    - [x] dotenv
- [x] Configuración de package.json
    - [x] `"type":"module"`
    - [x] `server:up` para levantar `json-server`
    - [x] `crud:curl` para ejecutar `src/crud-curl.js`
    - [x] `validate` para ejecutar `scripts/validate.sh`
- [x] Estructura de carpetas
    - [x] Crear todas las carpetas
- [x] Archivos de configuración
    - [x] Crear `.env` con las variables `PORT`, `API_BASE_URL`, `NODE_ENV`
    - [x] Crear `.env.example`
    - [x] Crear `.gitignore` (node_modules, .env, log, archivos del SO, carpetas de editores)
- [x] Base de datos json-server
    - [x] Crear `src/db/db.json` (Proporcionado por el profesor)

## Parte 2: Script CRUD con funciones JavaScript
- [x] Archivo src/crud-curl.js
    - [x] Importar y configurar `dotenv`
    - [x] Cargar variables de entorno `PORT` y `API_BASE_URL`
    - [x] Construir `BASE_URL` usando las variables
- [x] Funciones CRUD requeridas
    - [x] `createStudent(studentData)`
    - [x] `readAllStudents()`
    - [x] `readStudentById(id)`
    - [x] `updateStudent(id, studentData)`
    - [x] `patchStudent(id, partialData)`
    - [x] `deleteStudent(id)`
- [x] Ejecución del script
    - [x] Ejecutar las funciones en orden con parámetros apropiados
    - [x] Añadir mensajes informativos al inicio y final

## Parte 3: Documentación CRUD con CURL
-[x] README.md - Sección CRUD
    - [x] Documentar cada operación
        - [x] CREATE
        - [x] READ ALL
        - [x] READ BY ID
        - [x] UPDATE
        - [x] PATCH
        - [x] DELETE
    - [x] Título descriptivo
    - [x] Descripción de qué hace
    - [x] Comando cURL completo y funcional
    - [x] Explicación de cada parte del comando (Flags, método HTTP y headers)
    - [x] Respuesta HTTP real (headers + body)
    - [x] Explicación código de estado HTTP recibido
-[x] Pruebas reales
    - [x] Levantar servidor json-server
    - [x] Ejecutar cada comando cURL
    - [x] Capturar las respuestas reales
    - [x] Documentar respuestas en el README

## Parte 4: Thunder Client
- [x] Configuración
- [x] Peticiones
    - [x] CREATE Student (POST)
    - [x] GET All Students (GET)
    - [x] GET Student by ID (GET)
    - [x] UPDATE Student (PUT)
    - [x] PATCH Student (PATCH)
    - [x] DELETE Student (DELETE)
- [x] Capturas de pantalla de cada petición
    - [x] `Request completo` (método, URL, headers, body si aplica)
    - [x] `Response completo` (status, headers, body)
- [x] Documentación
    - [x] Explicar como usar `Thunder Client` en el README

## Parte 5: REST Client
- [x] Archivo peticiones-crud.http
    - [x] Crear archivo en la raíz del proyecto
    - [x] Definir variables al inicio (@baseUrl, @port, @apiUrl)
    - [x] Implemetar operaciones CRUD usando sintaxis de REST Client
- [x] Peticiones requeridas
    - [x] CREATE - Crear estudiante
    - [x] READ - Todos los estudiantes
    - [x] READ - Estudiante por ID
    - [x] READ - Filtrar estudiantes activos
    - [x] READ - Filtrar por nivel
    - [x] UPDATE - Actualizar estudiante completo (PUT)
    - [x] PATCH - Actualizar campo específico
    - [x] DELETE - Eliminar estudiante
- [x] Probrar cada petición desde VS Code y verificar que funcionan correctamente

## Parte 6: Script de validación
- [] Archivo scripts/validate.sh que valide
    - [] `package.json` 
    - [] `src/db/db.json` 
    - [] `.gitignore` 
    - [] `.env.example` 
    - [] `README.md` 
    - [] `checklist.md` 
    - [] `peticiones-crud.http` 
    - [] Carpetas `src/`, `scripts/`, `images/` 
    - [] Archivo `src/crud-curl.js` 
    - [] Configuración de `package.json`:
        - [] `"type": "module"` 
        - [] Dependencias `dotenv` y `json-server`
        - [] Scripts `server:up` y `crud:curl`
    - [] Al menos 6 capturas en `images/` 
    - [] Mostrar mensaje de validación completa 
- [] Dar permisos de ejecución y probar en terminal

## Parte 7: Checklist de progreso
- [x] Archivo checklist.md

## Parte 8: Git y GitHub
- [x] Crear repositorio `manual-http-[tu-nombre]`
- [] Añadir al profesor como colaborador
- [x] Configuración local
    - [x] Inicializar git
    - [x] Conectar con el repositorio remoto
    - [x] Crear rama principal `main` y subir código inicial
- [x] Rama de desarrollo
    - [x] Crear rama `m1/http-request-response` y cambiar a esa rama para trabajar
- [] Commits
    - [] Incrementales por cada fase del checklist
    - [] Mensajes descriptivos
    - [] Usar convención (`feat:`, `docs:`, `fix:`, etc)
- [] Pull Request
    - [] Subir rama al repositorio remoto
    - [] Crear Pull Request desde `m1/http-request-response` hacia `main`
    - [] Título del PR: `Entrega M1/http-request-response`
    - [] Descripción detallada del PR
        - [] Resumen de lo implementado
        - [] Dificultades encontradas y soluciones
        - [] Características completadas
    - [] Asignar al profesor como reviewer
    - [] Enviar el PR
- [] Después de la aprobación
    - [] Actualizar rama main local
    - [] Crear tag `M1/http-request-response` y subirlo al repositorio remoto