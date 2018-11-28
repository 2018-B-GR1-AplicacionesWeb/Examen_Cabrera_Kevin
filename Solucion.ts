//const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
declare var Promise;
declare var require;

//arreglos para guardar en arreglos

//Sacar Genero
function inicialiarBDD() {

    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'people.json',
                'utf-8',
                (error, contenidoArchivo) => { // CALLBACK
                    if (error) {

                        error: error

                    } else {
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse(contenidoArchivo)
                        })
                    }
                }
            )
        }
    );

}
inicialiarBDD().then(re=>{
    //console.log(re)
    re.bdd.forEach(valor=>{
        console.log(valor.gender)
    })
})

//console.log(inicialiarBDD)


/*
-Male
-n/a
-female
-hermaphrodite
 */

var arrMale: [];

//sacar Male

function inicialiarBDD2() {

    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'people.json',
                'utf-8',
                (error, contenidoArchivo) => { // CALLBACK
                    if (error) {

                        error: error

                    } else {
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse(contenidoArchivo)
                        })
                    }
                }
            )
        }
    );

}
inicialiarBDD2().then(re=>{
    //console.log(re)
    re.bdd.forEach(valor=>{
        if(valor.gener == 'Male'){
           // arrMale.push(valor);
            console.log(valor)
        }
    })
})

console.log(inicialiarBDD2)
