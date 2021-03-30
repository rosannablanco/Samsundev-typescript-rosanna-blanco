export class Email{ 
  _emailCompleto:string;
  constructor(
    private _tipo: string,
    private _direccion: string
    ){
      this._emailCompleto=`${this._tipo}: ${this._direccion}`;
    }
  set tipo(value:string){
    this._tipo=value;
  }
  set direccion(value:string){
    this._direccion=value;
  }
  get tipo(){
    return this._tipo;
  }
  get direccion(){
    return this._direccion;
  } 
  get emailCompleto():string{
    return this._emailCompleto;
  }
} 