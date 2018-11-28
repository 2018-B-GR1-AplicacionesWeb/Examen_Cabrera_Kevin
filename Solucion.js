//const inquirer = require('inquirer');
var fs = require('fs');
var rxjs = require('rxjs');
var mergeMap = require('rxjs/operators').mergeMap;
var map = require('rxjs/operators').map;
//arreglos para guardar en arreglos
//Sacar Genero
function inicialiarBDD() {
    return new Promise(function (resolve, reject) {
        fs.readFile('people.json', 'utf-8', function (error, contenidoArchivo) {
            if (error) {
                error: error;
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
inicialiarBDD().then(function (re) {
    //console.log(re)
    re.bdd.forEach(function (valor) {
        console.log(valor.gender);
    });
});
//console.log(inicialiarBDD)
/*
-Male
-n/a
-female
-hermaphrodite
 */
var arrMale;
//sacar Male
function inicialiarBDD2() {
    return new Promise(function (resolve, reject) {
        fs.readFile('people.json', 'utf-8', function (error, contenidoArchivo) {
            if (error) {
                error: error;
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
inicialiarBDD2().then(function (re) {
    //console.log(re)
    re.bdd.forEach(function (valor) {
        if (valor.gener == 'Male') {
            // arrMale.push(valor);
            console.log(valor);
        }
    });
});
console.log(inicialiarBDD2);
