"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var email_1 = require("./email");
var telefono_1 = require("./telefono");
//array tipo persona donde guardaremos las instancias de Persona
var list = [];
//Registro persona1
var email1 = new email_1.Email("Trabajo", "rosblanpra@gmail.com");
var telefono1 = new telefono_1.Telefono("Móvil", 606123456);
var direccion1 = new direccion_1.Direccion('Calle Sin Nombre 1', 17, 4, 'A', 28005, 'Madrid', 'Madrid');
var persona1 = new persona_1.Persona('Rosanna', 'Blanco Prado', 40, '07123456A', [6, 'febrero'], 'turquesa', 'F', [direccion1], [telefono1], [email1]);
list.push(persona1);
/* Persona 2 */
var email2 = new email_1.Email("Casa", "marcanton@gmail.com");
var telefono2 = new telefono_1.Telefono("Móvil", 638432167);
var direccion2 = new direccion_1.Direccion('Nombre de calle2', 5, 1, '1', 37004, 'Salamanca', 'Salamanca');
var persona2 = new persona_1.Persona('Marco', 'Pérez Juan', 33, '70123456V', [3, 'enero'], 'azul', 'M', [direccion2], [telefono2], [email2]);
list.push(persona2);
/* Persona 3 */
var email3 = new email_1.Email("personal", "sofimm@gmail.com");
var telefono3 = new telefono_1.Telefono("Móvil", 678157883);
var direccion3 = new direccion_1.Direccion('Nombre de calle3', 18, '4', 'B', 37009, 'Vistahermosa', 'Salamanca');
var persona3 = new persona_1.Persona('Sofia', 'Martín Martín', 55, '07156902C', [30, 'diciembre'], 'rojo', 'M', [direccion3], [telefono3], [email3]);
list.push(persona3);
//imprimo datos por consola
list.forEach(function (element) {
    element.imprimirDatos();
    console.log('\n');
});
//obtener el indice de la persona por dni
function buscarDni(d) {
    var index = -1;
    list.filter(function (p, i) {
        if (p.dni == d) {
            index = i;
        }
    });
    return index;
}
//indice filtrado por dni
var indexPerson = buscarDni('07156902C');
//añadiendo nueva direccion dentro del list
list[indexPerson].addDireccion('Calle Jamaica', 10, 2, 'B', 37005, 'Salamanca', 'Salamanca');
//añadiendo nuevo telefono
list[indexPerson].addTelefono('Fijo', 923445679);
//añadiendo nuevo email
list[indexPerson].addEmail('trabajo', 'smartinm@trabajo.com');
//imprimo datos por consola
list.forEach(function (element) {
    element.imprimirDatos();
    console.log('\n');
});
