import {Direccion} from './direccion';
import { Email } from './email';
import { Telefono } from './telefono';

export class Persona {
  _nombreCompleto:string;
  constructor(
    private _nombre:string, 
    private _apellidos: string,
    private _edad:number, 
    private _dni: string,
    private _cumple: [number|string, string],
    private _favColor:string,
    private _genero:string, 
    private _direccion:Direccion[],
    private _telefono:Telefono[],
    private _email:Email[],  
  ){
    this._nombreCompleto=`${this._nombre} ${this._apellidos}`;
  }
  get nombre(){
    return this._nombre;  
  }
  get apellidos(){
    return this._apellidos;  
  }
  get edad(){
    return this._edad;  
  }
  get dni(){
    return this._dni;  
  }
  get cumple(){
    return this._cumple;
  }
  get favColor(){
    return this._favColor;
  }
  get genero(){
    return this._genero;
  }
  get direccion(){
    return this._direccion;
  }
  get email(){
    return this._email;
  }
  get telefono(){
    return this._telefono;
  } 
  
  addDireccion(d:string, n:number, p:number, l:string, cp:number, pob: string, prov: string):void{
    let dir = new Direccion(d,n,p,l,cp,pob,prov);    
    this._direccion.push(dir);
  } 
  addEmail(t:string, dir:string):void{
    let mail = new Email(t, dir);
    this._email.push(mail);
  }
  addTelefono(t:string, n:number):void{
    let telf = new Telefono(t, n);
    this._telefono.push(telf);
  }
 
 /**/
 imprimirDatos():void{
    console.log(this._nombreCompleto);
    for (let i = 0; i < this.direccion.length; i++) {
      console.log(this.direccion[i].direccionCompleta); 
    }
    for (let i = 0; i < this.telefono.length; i++) {
      console.log(`${this.telefono[i].telefonoCompleto}`); 
    }
    for (let i = 0; i < this.email.length; i++) {
      console.log(this.email[i].emailCompleto); 
    }
  } 
}


