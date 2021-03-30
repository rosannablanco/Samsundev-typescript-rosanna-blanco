"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var email_1 = require("./email");
var telefono_1 = require("./telefono");
var Persona = /** @class */ (function () {
    function Persona(_nombre, _apellidos, _edad, _dni, _cumple, _favColor, _genero, _direccion, _telefono, _email) {
        this._nombre = _nombre;
        this._apellidos = _apellidos;
        this._edad = _edad;
        this._dni = _dni;
        this._cumple = _cumple;
        this._favColor = _favColor;
        this._genero = _genero;
        this._direccion = _direccion;
        this._telefono = _telefono;
        this._email = _email;
        this._nombreCompleto = this._nombre + " " + this._apellidos;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumple", {
        get: function () {
            return this._cumple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "favColor", {
        get: function () {
            return this._favColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "genero", {
        get: function () {
            return this._genero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.addDireccion = function (d, n, p, l, cp, pob, prov) {
        var dir = new direccion_1.Direccion(d, n, p, l, cp, pob, prov);
        this._direccion.push(dir);
    };
    Persona.prototype.addEmail = function (t, dir) {
        var mail = new email_1.Email(t, dir);
        this._email.push(mail);
    };
    Persona.prototype.addTelefono = function (t, n) {
        var telf = new telefono_1.Telefono(t, n);
        this._telefono.push(telf);
    };
    /**/
    Persona.prototype.imprimirDatos = function () {
        console.log(this._nombreCompleto);
        for (var i = 0; i < this.direccion.length; i++) {
            console.log(this.direccion[i].direccionCompleta);
        }
        for (var i = 0; i < this.telefono.length; i++) {
            console.log("" + this.telefono[i].telefonoCompleto);
        }
        for (var i = 0; i < this.email.length; i++) {
            console.log(this.email[i].emailCompleto);
        }
    };
    return Persona;
}());
exports.Persona = Persona;
