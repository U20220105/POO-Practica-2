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
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        if (!nombre)
            throw new Error("El nombre es obligatorio");
        if (edad <= 0)
            throw new Error("La edad debe ser mayor a 0");
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
// Clase Hija Estudiante
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, carnet) {
        var _this = _super.call(this, nombre, edad) || this;
        if (!carnet)
            throw new Error("El carnet es obligatorio");
        _this.carnet = carnet;
        return _this;
    }
    Estudiante.prototype.presentarse = function () {
        console.log("Soy el estudiante ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y mi carnet es ").concat(this.carnet, "."));
    };
    return Estudiante;
}(Persona));
// Clase Hija Docente
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(nombre, edad, especialidad) {
        var _this = _super.call(this, nombre, edad) || this;
        if (!especialidad)
            throw new Error("La especialidad es obligatoria");
        _this.especialidad = especialidad;
        return _this;
    }
    Docente.prototype.presentarse = function () {
        console.log("Soy el docente ".concat(this.nombre, ", especialista en ").concat(this.especialidad, "."));
    };
    return Docente;
}(Persona));
// Pruebas
console.log("---- REGISTRO ACADÉMICO ----");
try {
    var estudiante1 = new Estudiante("Carlos", 20, "2026-001");
    estudiante1.presentarse();
    var docente1 = new Docente("Ana", 35, "Programación");
    docente1.presentarse();
}
catch (error) {
    console.log("Error detectado: ".concat(error.message));
}
console.log("---- FIN DEL PROCESO ----");
