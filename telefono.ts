export class Telefono{ 
  _telefonoCompleto:string;
   constructor(
  private _tipo: string,
  private _numero: number){
    this._telefonoCompleto = `${this._tipo}: ${this._numero}`;
  }
  
  set tipo(value:string){
    this._tipo=value;
  }
  set numero(value:number){
    this._numero=value;
  }
  get tipo(){
    return this._tipo;
  }
  get numero(){
    return this._numero;
  }
  get telefonoCompleto(){
    return this._telefonoCompleto;
  }
  
}
