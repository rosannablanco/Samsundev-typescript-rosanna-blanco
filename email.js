"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email = /** @class */ (function () {
    function Email(_tipo, _direccion) {
        this._tipo = _tipo;
        this._direccion = _direccion;
        this._emailCompleto = this._tipo + ": " + this._direccion;
    }
    Object.defineProperty(Email.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (value) {
            this._direccion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "emailCompleto", {
        get: function () {
            return this._emailCompleto;
        },
        enumerable: true,
        configurable: true
    });
    return Email;
}());
exports.Email = Email;
