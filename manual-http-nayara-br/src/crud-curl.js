import dotenv from 'dotenv';
dotenv.config();

// Cargar variables de entorno
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;

// Construir URL completa
const BASE_URL = `${API_BASE_URL}:${PORT}/students`;

/**
 * createStudent(studentData)
 * Crea un estudiante y envía los datos al servidor.
 * @param {Object} studentData - Datos del estudiante a crear.
 */
export function createStudent(studentData) {
    const curl = `curl -X POST ${BASE_URL} -H "Content-Type: application/json" -d '${JSON.stringify(studentData)}'`;
    console.log(curl);
}


/**
 * readAllStudents()
 * Obtener todos los estudiantes.
 */
export function readAllStudents() {
    const curl = `curl -X GET ${BASE_URL}`
    console.log(curl);
}


/**
 * readStudentById(id)
 * Obtener un estudiante por ID.
 * @param {number} id - Identificador del estudiante.
 */
export function readStudentById(id) {
    const curl = `curl -X GET ${BASE_URL}/${id}`
    console.log('\n=== Read student by ID ===');
    console.log(curl);
}


/**
 * updateStudent(id, studentData)
 * Actualizar un estudiante usando su ID.
 * @param {number} id - Identificador del estudiante.
 * @param {Object} studentData - Nuevos datos del estudiante.
 */
export function updateStudent(id, studentData) {
    const curl = `curl -X PUT ${BASE_URL}/${id} -H "Content-Type: application/json" -d '${JSON.stringify(studentData)}'`
    console.log('\n=== Update Student ===');
    console.log(curl);
}


/**
 * patchStudent(id, partialData)
 * Actualizar parcialmente un estudiante.
 * @param {number} id - Identificador del estudiante.
 * @param {Object} partialData - Datos que queremos cambiar al estudiante.
 */
export function patchStudent(id, partialData) {
    const curl = `curl -X PATCH ${BASE_URL}/${id} -H "Content-Type: application/json" -d '${JSON.stringify(partialData)}'`
    console.log(curl);
}


/**
 * deleteStudent(id)
 * Eliminar un estudiante.
 * @param {number} id - Identificador del estudiante.
 */
export function deleteStudent(id) {
    const curl = `curl -X DELETE ${BASE_URL}/${id}`
    console.log('\n=== Delete Student ===');
    console.log(curl);
}


function test() {
    const studentTesting = {
        id: 1,
        name: "Nayara Bastida",
        email: "nayara@gmail.com",
        enrollmentDate: "2020-10-01",
        active: true,
        level: "begginer"
    };

    console.log("\n=== Inicio del test crud ===");

    // 1. createStudent
    console.log("\n=== Creando estudiante ===");
    createStudent(studentTesting);
    console.log("Estudiante creado con éxito ✔.");


    // 2. readAllStudents
    console.log("\n=== Leyendo todos los estudiantes ===");
    readAllStudents();
    console.log("Estudiantes leídos correctamente ✔.");


    // 3. readStudentById
    console.log("\n=== Leyendo estudiante indicado por ID ===");
    readStudentById(studentTesting.id);
    console.log(`Estudiante con ID ${studentTesting.id} leído ✔.`);


    // 4. updateStudent
    console.log("\n=== Actualizando estudiante indicado por ID (Datos completos) ===");
    updateStudent(studentTesting.id, {
        ...studentTesting,
        email: "nayarabr@gmail.com",
        level: "intermediate"
    });
    console.log(`Estudiante con ID ${studentTesting.id} actualizado ✔.`);


    // 4. patchStudent
    console.log("\n=== Actualizando estudiante indicado por ID (Datos parciales) ===");
    patchStudent(studentTesting.id, {active : false});
    console.log(`Estudiante con ID ${studentTesting.id} actualizado ✔.`);


    // 4. deleteStudent
    console.log("\n=== Eliminando estudiante indicado por ID ===");
    deleteStudent(studentTesting.id);
    console.log(`Estudiante eliminado con éxito ✔.`);

    console.log("\n=== Fin del test crud ===");
}

test();