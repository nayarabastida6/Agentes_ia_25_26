#!/bin/bash

# Función para mostrar un mensaje de éxito
function success_message() {
    echo "Todo está correcto. El proyecto pasa la validación. ✅"
}

# Función para mostrar un mensaje de error
function error_message() {
    echo "Faltan algunos archivos o configuraciones. El proyecto no pasa la validación. ❌"
}

# Inicializar contador de errores
error_count=0

# Verificar la existencia de los archivos y carpetas requeridos
echo "Comprobando las validaciones requeridas... 🔍"

# Verificar archivo package.json
if [ ! -f "package.json" ]; then
    echo "Falta el archivo package.json ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar archivo db.json
if [ ! -f "src/db/db.json" ]; then
    echo "Falta el archivo db.json en src/db/ ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar archivo .gitignore
if [ ! -f ".gitignore" ]; then
    echo "Falta el archivo .gitignore ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar archivo .env.example
if [ ! -f ".env.example" ]; then
    echo "Falta el archivo .env.example ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar archivo README.md
if [ ! -f "README.md" ]; then
    echo "Falta el archivo README.md ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar archivo checklist.md
if [ ! -f "checklist.md" ]; then
    echo "Falta el archivo checklist.md ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar archivo peticiones-crud.http
if [ ! -f "peticiones-crud.http" ]; then
    echo "Falta el archivo peticiones-crud.http ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar carpeta src/
if [ ! -d "src" ]; then
    echo "Falta la carpeta src/ ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar archivo src/crud-curl.js
if [ ! -f "src/crud-curl.js" ]; then
    echo "Falta el archivo src/crud-curl.js ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar carpeta images/
if [ ! -d "images" ]; then
    echo "Falta la carpeta images/ ⚠️"
    error_count=$((error_count + 1))
fi

# Verificar carpeta scripts/
if [ ! -d "scripts" ]; then
    echo "Falta la carpeta scripts/ ⚠️"
    error_count=$((error_count + 1))
fi

# Verificaciones en package.json
    # Verificar que tiene "type": "module"
    if ! grep -q '"type": "module"' package.json; then
        echo "El archivo package.json no contiene 'type': 'module'. ⚠️"
        error_count=$((error_count + 1))
    fi

    # Verificar que dotenv está instalado
    if ! grep -q '"dotenv":' package.json; then
        echo "dotenv no está instalado. ⚠️"
        error_count=$((error_count + 1))
    fi

    # Verificar que json-server está instalado
    if ! grep -q '"json-server":' package.json; then
        echo "json-server no está instalado. ⚠️"
        error_count=$((error_count + 1))
    fi

    # Verificar que existen los scripts server:up y crud:curl en package.json
    if ! grep -q '"server:up":' package.json; then
        echo "El script server:up no está definido en package.json. ⚠️"
        error_count=$((error_count + 1))
    fi

    if ! grep -q '"crud:curl":' package.json; then
        echo "El script crud:curl no está definido en package.json. ⚠️"
        error_count=$((error_count + 1))
    fi

# Verificar existencia de al menos 6 capturas de Thunder Client en images/
thunder_images=$(ls images | grep -E "^thunder-.*\.png$" | wc -l)
if [ "$thunder_images" -lt 6 ]; then
    echo "Faltan capturas de Thunder Client. Se requieren al menos 6. ⚠️"
    error_count=$((error_count + 1))
fi

# Comprobamos si todo está en orden
if [ "$error_count" -eq 0 ]; then
    echo "Total de errores: $error_count"
    success_message
else
    echo "Total de errores: $error_count"
    error_message
fi