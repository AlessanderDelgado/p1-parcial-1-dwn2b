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
        return true;
    }
    return false;
}

function validarCodigo(codigo){
    let flag = false;
    if (discosArray.length > 0){
        for (let disco of discosArray) {
            if (disco.codigoDisco == codigo){
                alert(" El codigo está repetido, ingrese otro codigo")
                flag = true;
            }
        }
    }
    if (codigo <= 0 || codigo > 999 || isNaN(codigo) || codigo == ""){
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
    // function colorear(duracion) {

    //     let pista = {};

    //     if (pista.duracion > 180 ){
    //         alert("FUNCIONA QUE DETECTA QUE TIENE MAS DE 180");
    //         /*pPintado.setAttribute("class", "red");*/

    //         var elemento = document.querySelector("p");
    //         /*.innerHTML;*/
    //         elemento.classList.add('red');
    //     }
    //     return;
    // }


    let contenedor = document.getElementById('info');

    for(let disco of discosArray) {
        let color = "";
        let html = '<div>';
        html += `\n   <h2>${disco.nombreDisco}</h2>`;

        let pistas = disco.pistasArray;

        for(let pista of pistas) {
            if (pista.duracionCancion > 180) {
                color = "red";
            }
            html += `\n    <h3>${pista.nombreCancion}</h3>`;
            html += `\n    <p class="${color}">${pista.duracionCancion}</p>`;
        }

        html += '\n</div>';
        contenedor.innerHTML += html;
    }

    // colorear(pista.duracionCancion);
};

// Todas las funciones que necesites:
