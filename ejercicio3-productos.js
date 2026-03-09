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
var Producto = /** @class */ (function () {
    function Producto(nombre, precioBase) {
        if (!nombre)
            throw new Error("El nombre es obligatorio");
        if (precioBase <= 0)
            throw new Error("El precio debe ser mayor a 0");
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
    Producto.prototype.calcularPrecioFinal = function () {
        return this.precioBase;
    };
    return Producto;
}());
// Producto Físico
var ProductoFisico = /** @class */ (function (_super) {
    __extends(ProductoFisico, _super);
    function ProductoFisico(nombre, precioBase, pesoKG) {
        var _this = _super.call(this, nombre, precioBase) || this;
        if (pesoKG <= 0)
            throw new Error("El peso debe ser mayor a 0");
        _this.pesoKG = pesoKG;
        return _this;
    }
    ProductoFisico.prototype.calcularPrecioFinal = function () {
        var costoEnvio = this.pesoKG * 2;
        return this.precioBase + costoEnvio;
    };
    return ProductoFisico;
}(Producto));
// Producto Digital
var ProductoDigital = /** @class */ (function (_super) {
    __extends(ProductoDigital, _super);
    function ProductoDigital(nombre, precioBase, plataforma) {
        var _this = _super.call(this, nombre, precioBase) || this;
        if (!plataforma)
            throw new Error("La plataforma es obligatoria");
        _this.plataforma = plataforma;
        return _this;
    }
    ProductoDigital.prototype.calcularPrecioFinal = function () {
        return this.precioBase;
    };
    return ProductoDigital;
}(Producto));
// Prueba
console.log("---- TIENDA DE PRODUCTOS ----");
try {
    var producto1 = new ProductoFisico("Laptop", 800, 3);
    console.log("Precio final del producto f\u00EDsico: $".concat(producto1
        .calcularPrecioFinal()
        .toFixed(2)));
}
catch (error) {
    console.log("Error detectado: ".concat(error.message));
}
console.log("---- FIN DEL PROCESO ----");
