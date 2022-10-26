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


/**
 * Valida que el dato ingresado sea correcto.
 * @param {string} cadena 
 * @returns 
 */
function validarString(cadena) {
    /* Si lo ingresado es distinto a vacío (es decir, ingresó algo) */
    if (cadena != null){
        /* elimina los espacios en blanco en ambos extremos del string. */
        cadena = cadena.trim(); 
    }

    /* Si ingresa datos vacīos o clickea en cancelar sin ingresar nada */
    if (cadena == "" || cadena == null || cadena == undefined){
        /* Muestro mensaje de alerta */
        alert ("Algo salio mal, volve a ingresar un dato"); 
        return true;
    }
    return false;
}


/* Ver si se puede dividir esta función en dos, o crear dos "subfunciones", para que cada una haga una sola cosa?*/

/**
 * Valida que el código no esté repetido y que esté en rango.
 * @param {number} codigo 
 * @returns 
 */
function validarCodigo(codigo){
    let flag = false;
    /* Si tengo como mínimo un disco cargado */
    if (discosArray.length > 0){
        /* Recorro los discos */ 
        for (let disco of discosArray) {
            /* Si el codigo del disco ingresado es igual a algún código existente */
            if (disco.codigoDisco == codigo){
                /* Muestro mensaje de alerta */
                alert(" El codigo está repetido, ingrese otro codigo")
                flag = true;
            }
        }
    }

    /* Si el código no está en rango, es string o está vacīo*/
    if (codigo <= 0 || codigo > 999 || isNaN(codigo) || codigo == ""){
        /* Muestro mensaje de alerta */
        alert("Codigo invalido, ingrese entre 1 y 999");
        flag = true;
    }
    return flag;
}


/**
 * Valida que la duración esté en rango.
 * @param {number} duracion 
 * @returns 
 */
function validacionDuracion(duracion) {
    let flag = false;
    if (duracion < 0 || duracion > 7200 || isNaN(duracion)){
        alert("La duracion esta mal");
        flag = true;
    }
    return flag;
}

// Función Cargar:
/**
 * Carga nuevo disco
 */
const Cargar = () => {
    // Cositas:
    let disco = {

    }
    /* Pido ingresar datos, hasta que la función de validar que corresponda de FALSE y salga del bucle. */
    do {
        disco.nombreDisco = prompt("Ingrese el nombre del disco");
    } while (validarString(disco.nombreDisco)) // llamar a la función, que devuelve true o false.

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
/**
 * Muestra discos
 */
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
        html += `\n   <h3>${disco.banda}</h3>`;
        html += `\n   <h3>${disco.codigoDisco}</h3>`;

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
