# Documentación CRUD con cURL 📚
Este apartado describe y demuestra el funcionamiento de las operaciones CRUD implementadas en el script `crud-curl.js`, que interactúan con la API de estudiantes mediante comandos cURL.


## ¿Qué es cURL?
Es una herramienta de línea de comandos que permite enviar solicitudes HTTP a servidores. Se utiliza para probar endpoints de una API, permitiendo ver las respuestas reales del servidor y verificar que las operaciones funcionan correctamente.

## Índice de operaciones
1. CREATE
2. READ ALL
3. READ BY ID
4. UPDATE
5. PATCH
6. DELETE


## 1. CREATE (Crear estudiante)
Crea un nuevo estudiante en la base de datos.

### Comando cURL
```bash
curl -i -X POST http://localhost:4000/students \
    -H "Content-Type: application/json" \
    -d '{"id":10,"name":"Nayara Bastida","email":"nayara@gmail.com","enrollmentDate":"2020-10-01","active":true,"level":"beginner"}'
```

### Explicación detallada de cada parte
#### Qué hace cada flag
- **i** → Incluye en la salida los headers de la respuesta HTTP junto con el cuerpo body, hace que la respuesta contenga más información relevante.
- **X POST** → Indica el método HTTP que se usa (POST).
- **http://localhost:4000/students** → Es la URL del endpoint al que se envía la solicitud.
- **H "Content-Type: application/json"** → Header que indica que el cuerpo que enviamos está en formato JSON.
- **d '{...}'** → Datos del estudiante que queremos crear.

#### Por qué se usa ese método HTTP
Se usa el método **POST** para enviar datos al servidor y crear un nuevo recurso (estudiante) en la base de datos.

#### Qué headers se envían y porque
Enviamos el header `Content-Type: application/json` para que el servidor sepa que la petición está en formato JSON.

### Respuesta HTTP real obtenida (headers + body)
La siguiente imagen muestra la respuesta completa tras ejecutar el comando. Se observan los headers y el body devuelto el crear el estudiante.

![Respuesta real - Crear estudiante](images/curl-create-student.png)

### Explicación del código de estado HTTP recibido
`HTTP/1.1 201 Created` → Indica que el recurso fue creado correctamente en el servidor y devuelve los datos del nuevo estudiante como confirmación.



## 2. READ ALL (Leer todos los estudiantes)
Obtiene la lista completa de estudiantes.

### Comando cURL
```bash
curl -i -X GET http://localhost:4000/students
```

### Explicación detallada de cada parte
#### Qué hace cada flag
- **i** → Incluye los headers y el body de la respuesta.
- **X GET** → Indica el método HTTP que se usa (GET).
- **http://localhost:4000/students** → Es la URL del endpoint al que se envía la solicitud.

#### Por qué se usa ese método HTTP
Se usa el método **GET** para obtener información sin cambiar nada en el servidor.

#### Qué headers se envían y porque
No se envían headers ya que para esta petición no se envían datos.

### Respuesta HTTP real obtenida (headers + body)
La siguiente imagen muestra la respuesta tras ejecutar el comando. Se observan los headers y el body que contiene todos los estudiantes registrados.

![Respuesta real - Leer todos los estudiantes](images/curl-read-all-student.png)

### Explicación del código de estado HTTP recibido
`HTTP/1.1 200 OK` → Indica que la petición fue correcta y se mostró la información solicitada correctamente.



## 3. READ BY ID (Leer estudiante mediante ID)
Obtiene los datos de un estudiante específico usando su ID.

### Comando cURL
```bash
curl -i -X GET http://localhost:4000/students/10
```

### Explicación detallada de cada parte
#### Qué hace cada flag
- **i** → Incluye los headers y el body de la respuesta.
- **X GET** → Indica el método HTTP que se usa (GET).
- **http://localhost:4000/students/10** → Es la URL del endpoint al que se envía la solicitud, usamos /10 ya que es el ID del estudiante al que queremos acceder.

#### Por qué se usa ese método HTTP
Se usa el método **GET** para obtener información de un recurso sin cambiar modificar el servidor.

#### Qué headers se envían y porque
No se envían headers porque en este caso solo queremos consultar información.

### Respuesta HTTP real obtenida (headers + body)
La siguiente imagen muestra la respuesta completa tras ejecutar el comando. Se observan los headers y el body que contiene el estudiante indicado.

![Respuesta real - Leer estudiante mediante ID](images/curl-read-by-id.png)

### Explicación del código de estado HTTP recibido
`HTTP/1.1 200 OK` → Indica que todo fue bien y se mostró la información del estudiante solicitado.



## 4. UPDATE (Actualizar estudiante completo)
Actualiza completamente los datos de un estudiante.

### Comando cURL
```bash
curl -i -X PUT http://localhost:4000/students/10 \
    -H "Content-Type: application/json" \
    -d '{"id":10, "name":"Nayara Bastida", "email":"nayara_cambiado@gmail.com", "enrollmentDate":"2020-20-02", "active":true, "level":"intermediate"}'
```

### Explicación detallada de cada parte
#### Qué hace cada flag
- **i** → Incluye los headers y el body de la respuesta.
- **X PUT** → Indica el método HTTP que se usa (PUT).
- **http://localhost:4000/students/10** → Es la URL endpoint del estudiante con ID 10.
- **H "Content-Type: application/json"** → Header que indica que el cuerpo que enviamos está en formato JSON.
- **d '{...}'** → Datos obligatorios que se envían, incluso si no han cambiado.

#### Por qué se usa ese método HTTP
Se usa el método **PUT** ya que remplaza el recurso por completo, es el más útil cuando se quieren actualizar todos los datos.

#### Qué headers se envían y porque
Enviamos el header `Content-Type: application/json` para que el servidor sepa que la petición está en formato JSON.

### Respuesta HTTP real obtenida (headers + body)
La siguiente imagen muestra la respuesta completa tras ejecutar el comando. Se observan los headers y el body que contiene el estudiante actualizado completamente.

![Respuesta real - Actualizar estudiante completamente](images/curl-update-student.png)

### Explicación del código de estado HTTP recibido
`HTTP/1.1 200 OK` → Indica que todo fue bien y se mostró la información del estudiante actualizada.



## 5. PATCH (Actualizar estudiante parcialmente)
Actualiza parcialmente los datos de un estudiante, cambiando solo algunos campos.

### Comando cURL
```bash
curl -i -X PATCH http://localhost:4000/students/10 \
    -H "Content-Type: application/json" \
    -d '{"active":false}'
```

### Explicación detallada de cada parte
#### Qué hace cada flag
- **i** → Incluye los headers y el body de la respuesta.
- **X PATCH** → Indica el método HTTP que se usa (PATCH).
- **http://localhost:4000/students/10** → Es la URL endpoint del estudiante con ID 10.
- **H "Content-Type: application/json"** → Header que indica que el cuerpo que enviamos está en formato JSON.
- **d '{...}'** → Datos del campo que queremos actualizar.

#### Por qué se usa ese método HTTP
Se usa el método **PATCH** ya que no queremos cambiar todos los datos del recurso, es el más útil cuando se quieren hacer cambios puntuales.

#### Qué headers se envían y porque
Enviamos el header `Content-Type: application/json` para que el servidor sepa que la petición está en formato JSON.

### Respuesta HTTP real obtenida (headers + body)
La siguiente imagen muestra la respuesta completa tras ejecutar el comando. Se observan los headers y el body que contiene el estudiante con el campo actualizado.

![Respuesta real - Actualizar estudiante parcialmente](images/curl-patch-student.png)

### Explicación del código de estado HTTP recibido
`HTTP/1.1 200 OK` → Indica que todo fue bien y se mostró la información del estudiante actualizada con `active:false`.



## 6. DELETE (Eliminar estudiante)
Elimina a un estudiante de la base de datos mediante su ID.

### Comando cURL
```bash
curl -i -X DELETE http://localhost:4000/students/10
```

### Explicación detallada de cada parte
#### Qué hace cada flag
- **i** → Incluye los headers y el body de la respuesta.
- **X DELETE** → Indica el método HTTP que se usa (DELETE).
- **http://localhost:4000/students/10** → Es la URL del endpoint al que se envía la solicitud, usamos /10 ya que es el ID del estudiante al que queremos acceder.

#### Por qué se usa ese método HTTP
Se usa el método **DELETE** para eliminar un recurso del servidor.

#### Qué headers se envían y porque
No se envían headers ya que no es necesario en este caso.

### Respuesta HTTP real obtenida (headers + body)
La siguiente imagen muestra la respuesta completa tras ejecutar el comando. Se observan los headers y el body que contiene el estudiante eliminado como confirmación.

![Respuesta real - Leer estudiante mediante ID](images/curl-delete-student.png)

### Explicación del código de estado HTTP recibido
`HTTP/1.1 200 OK` → Indica que todo fue bien y se mostró la información del estudiante eliminado.