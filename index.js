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

function validarString(cadena) {
    if (cadena != null){
        cadena = cadena.trim();
    }
    if (cadena == "" || cadena == null || cadena == undefined){
        alert ("Algo salio mal, volve a ingresar un dato");
        return false;
    }
    return true;
}

function validarCodigo(codigoDisco){
    let flag = true;
    if (discosArray.lenght > 0){
        for (let disco of discosArray) {
            if (disco.codigoDisco == codigoDisco){
                alert(" El codigo está repetido, ingrese otro codigo")
                flag = true;
            }
        }
    }
    if (codigoDisco <= 0 || codigoDisco > 999 || isNaN(codigoDisco) || codigoDisco == ""){
        alert("Codigo invalido, ingrese entre 1 y 999");
        flag = true;
    }
    return flag;
}

function validacionDuracion(duracion) {
    let flag = false;
    if (duracion < 0 || duracion > 7200 || isNaN(duracion)){
        alert("La duracion esta mal");
        flag = true;
    }
    return flag;
}

// Función Cargar:
const Cargar = () => {
    // Cositas:
    let disco = {

    }
    do {
        disco.nombreDisco = prompt("Ingrese el nombre del disco");
    } while (validarString(disco.nombreDisco)) // llamar a la funcion

    do{
        disco.banda = prompt("Ingrese el nombre de la banda");
    } while (validarString(disco.banda))

    do {
        disco.codigoDisco = parseInt(prompt("Ingrese codigo numerico del disco"));
    } while (validarCodigo(disco.codigoDisco));

    disco.pistasArray = []


    do {
        let pista = {}
        do {
            pista.nombreCancion = prompt("Ingrese la cancion");
        } while (validarString(pista.nombreCancion))
        do {
            pista.duracionCancion = parseInt(prompt("Ingrese la duracion de la cancion"));
        } while (validacionDuracion(pista.duracionCancion ));

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
