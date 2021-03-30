export class Direccion{
  _direccionCompleta:string;
  constructor(
    private _direccion: string, 
    private _num: number, 
    private _piso: number | string,
    private _letra: string,
    private _cp: number,
    private _poblacion: string,
    private _provincia: string,
    ){
      this._direccionCompleta=`${this._direccion}, ${this._num}, ${this._piso}, ${this._letra}, ${this._cp}, ${this._poblacion}(${this._provincia})`;
    } 
  get direccionCompleta(){
    return this._direccionCompleta;
  }
  get direccion(){
    return this._direccion;
  }
  get num(){
    return this._num;
  }
  get piso(){
    return this._piso;
  }
  get letra(){
    return this._letra;
  }
  get cp(){
    return this._cp;
  }
  get poblacion(){
    return this._poblacion;
  }
  get provincia(){
    return this._provincia;
  }
  set direccion(v:string){
    this._direccion=v;
  }
  set num(v:number){
    this._num=v;
  }
  set piso(v:number | string){
    this._piso=v;
  }
  set letra(v:string){
    this._letra=v;
  }
  set cp(v:number){
    this._cp=v;
  }
  set poblacion(v:string){
    this._poblacion=v;
  }
  set provincia(v:string){
    this._provincia=v;
  }
  
}