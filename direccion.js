"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion = /** @class */ (function () {
    function Direccion(_direccion, _num, _piso, _letra, _cp, _poblacion, _provincia) {
        this._direccion = _direccion;
        this._num = _num;
        this._piso = _piso;
        this._letra = _letra;
        this._cp = _cp;
        this._poblacion = _poblacion;
        this._provincia = _provincia;
        this._direccionCompleta = this._direccion + ", " + this._num + ", " + this._piso + ", " + this._letra + ", " + this._cp + ", " + this._poblacion + "(" + this._provincia + ")";
    }
    Object.defineProperty(Direccion.prototype, "direccionCompleta", {
        get: function () {
            return this._direccionCompleta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (v) {
            this._direccion = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (v) {
            this._num = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (v) {
            this._piso = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (v) {
            this._letra = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "cp", {
        get: function () {
            return this._cp;
        },
        set: function (v) {
            this._cp = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (v) {
            this._poblacion = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (v) {
            this._provincia = v;
        },
        enumerable: true,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
