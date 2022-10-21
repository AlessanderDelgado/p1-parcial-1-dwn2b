'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
var discosArray = []; // Array de discos

// Función Cargar:
const Cargar = () => {
    // Cositas:
    let disco = {

    }
    do {
    disco.nombreDisco = prompt("Ingrese el nombre del disco");
    } while (validarNombreDisco(disco.nombreDisco)) // llamar a la funcion
    disco.banda = prompt("Ingrese el nombre de la banda");
    disco.codigoDisco = prompt("Ingrese codigo numerico del disco");
    disco.pistasArray = []


    do {
        let pista = {}
        pista.nombreCancion = prompt("Ingrese la cancion");
        pista.duracionCancion = prompt("Ingrese la duracion de la cancion");
        disco.pistasArray.push(pista);

    } while (confirm("Quiere seguir cargando canciones?"));

    discosArray.push(disco)
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
