// IMPORTACIONES
import dotenv from "dotenv";

// CARGO las variables .env a este fichero
dotenv.config();
// todas las variables están en process.env.NOMBRE_DE_LA_VARIABLE

//Mostrar por consola el valor de las variables de ENTORNO.
console.log("URL de acceso: ",process.env.URL);
console.log("Puerto: ", process.env.PORT);
console.log(`Url con Puerto :${process.env.URL}:${Number(process.env.PORT)+1}`);
