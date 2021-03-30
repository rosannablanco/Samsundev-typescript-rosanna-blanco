"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(_tipo, _numero) {
        this._tipo = _tipo;
        this._numero = _numero;
        this._telefonoCompleto = this._tipo + ": " + this._numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "telefonoCompleto", {
        get: function () {
            return this._telefonoCompleto;
        },
        enumerable: true,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
