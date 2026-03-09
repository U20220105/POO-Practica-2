var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase Base
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        if (!titular)
            throw new Error("El titular es obligatorio");
        if (saldo < 0)
            throw new Error("El saldo no puede ser negativo");
        this.titular = titular;
        this.saldo = saldo;
    }
    Cuenta.prototype.mostrarInformacion = function () {
        console.log("Titular: ".concat(this.titular));
        console.log("Saldo actual: $".concat(this.saldo.toFixed(2)));
    };
    return Cuenta;
}());
// Clase Hija
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(titular, saldo, tasaInteres) {
        var _this = _super.call(this, titular, saldo) || this;
        if (tasaInteres <= 0)
            throw new Error("La tasa de interés debe ser mayor a 0");
        _this.tasaInteres = tasaInteres;
        return _this;
    }
    CuentaAhorro.prototype.aplicarInteres = function () {
        var interes = this.saldo * this.tasaInteres;
        this.saldo += interes;
        console.log("Inter\u00E9s aplicado: $".concat(interes.toFixed(2)));
    };
    return CuentaAhorro;
}(Cuenta));
// Prueba con try-catch
console.log("---- SISTEMA DE AHORROS ----");
try {
    var cuenta1 = new CuentaAhorro("Jose Gomez", 1000, 0.05);
    cuenta1.mostrarInformacion();
    cuenta1.aplicarInteres();
    cuenta1.mostrarInformacion();
}
catch (error) {
    console.log("Error detectado: ".concat(error.message));
}
console.log("---- FIN DEL PROCESO ----");
