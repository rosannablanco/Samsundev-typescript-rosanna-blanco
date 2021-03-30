import {Persona} from './persona';
import {Direccion} from './direccion';
import { Email } from './email';
import { Telefono } from './telefono';




//array tipo persona donde guardaremos las instancias de Persona
let list:Persona[]=[];

//Registro persona1
let email1 = new Email("Trabajo", "rosblanpra@gmail.com");
let telefono1 = new Telefono("Móvil", 606123456);
let direccion1 = new Direccion(
  'Calle Sin Nombre 1',
   17,
   4,
   'A',
   28005,
   'Madrid',
   'Madrid'
 );

let persona1 = new Persona(
  'Rosanna',
  'Blanco Prado',
  40,
  '07123456A',
  [6, 'febrero'],
  'turquesa',
  'F',
  [direccion1],
  [telefono1],
  [email1], 
);

list.push(persona1);

/* Persona 2 */
let email2 = new Email("Casa", "marcanton@gmail.com");
let telefono2 = new Telefono("Móvil", 638432167);
let direccion2 = new Direccion(
  'Nombre de calle2',
   5,
   1,
   '1',
   37004,
   'Salamanca',
   'Salamanca'
 );

let persona2 = new Persona(
  'Marco',
  'Pérez Juan',
  33,
  '70123456V',
  [3, 'enero'],
  'azul',
  'M',
  [direccion2],
  [telefono2],
  [email2], 
); 

list.push(persona2);

/* Persona 3 */
let email3 = new Email("personal", "sofimm@gmail.com");
let telefono3 = new Telefono("Móvil", 678157883);
let direccion3 = new Direccion(
  'Nombre de calle3',
   18,
   '4',
   'B',
   37009,
   'Vistahermosa',
   'Salamanca'
 );

let persona3 = new Persona(
  'Sofia',
  'Martín Martín',
  55,
  '07156902C',
  [30, 'diciembre'],
  'rojo',
  'M',
  [direccion3],
  [telefono3],
  [email3], 
); 

list.push(persona3);

//imprimo datos por consola
list.forEach(element => {
  element.imprimirDatos();
  console.log('\n');
});

//obtener el indice de la persona por dni
function buscarDni(d:string):number{
  let index:number = -1;
  list.filter((p, i)=>{
    if(p.dni==d){
      index = i;
    }
  });
  return index;   
}

//indice filtrado por dni
let indexPerson:number = buscarDni('07156902C');

//añadiendo nueva direccion dentro del list
list[indexPerson].addDireccion(
  'Calle Jamaica',
  10,
  2,
  'B',
  37005,
  'Salamanca',
  'Salamanca'
  );
  
  
  //añadiendo nuevo telefono
  list[indexPerson].addTelefono('Fijo', 923445679);
  
  //añadiendo nuevo email
  list[indexPerson].addEmail('trabajo','smartinm@trabajo.com');
 
  //imprimo datos por consola
  list.forEach(element => {
    element.imprimirDatos();
    console.log('\n');
  });
  
 
  

  















