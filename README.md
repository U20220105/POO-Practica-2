# Practica 2 – Herencia en TypeScript

**Universidad de Oriente (UNIVO)**

**Asignatura:** Programación Orientada a Objetos

**Docente:** MDU. Josue Montoya

**Estudiante:** U20220105

---

## Descripción

Esta práctica tiene como objetivo aplicar el concepto de **Herencia** en la Programación Orientada a Objetos utilizando **TypeScript**.

La herencia permite que una clase hija reutilice atributos y métodos de una clase padre, promoviendo reutilización de código y mejor organización del sistema.

Para comprobar el funcionamiento del programa también se utilizan:

* Validaciones con `throw`
* Manejo de errores con `try-catch`
* Uso de `extends`
* Uso de `super`
* Modificadores de acceso (`protected`, `private`)

---

## Estructura del Proyecto

```
practica2-herencia
│
├── ejercicio1-cuenta.ts
├── ejercicio2-personas.ts
├── ejercicio3-productos.ts
└── README.md
```

Cada ejercicio está implementado en un archivo independiente como lo indican las instrucciones de la práctica.

---

## Tecnologías Utilizadas

* TypeScript
* Node.js
* Visual Studio Code

---

## Cómo Ejecutar el Proyecto

### 1. Instalar TypeScript

```bash
npm install -g typescript
```

### 2. Compilar un archivo

Ejemplo:

```bash
tsc ejercicio1-cuenta.ts
```

Esto generará el archivo JavaScript correspondiente.

### 3. Ejecutar el programa

```bash
node ejercicio1-cuenta.js
```

---

# Ejercicios Implementados

## Ejercicio 1 – Sistema de Ahorros Bancarios

Se implementa una clase base **Cuenta** que contiene:

* titular
* saldo

La clase hija **CuentaAhorro** añade:

* tasaInteres
* método `aplicarInteres()`

El sistema calcula el interés basado en el saldo actual.

---

## Ejercicio 2 – Registro Académico

Se crea una clase base **Persona** con:

* nombre
* edad

Luego se crean dos clases hijas:

**Estudiante**

* carnet

**Docente**

* especialidad

Ambas clases implementan el método `presentarse()` para mostrar sus datos.

---

## Ejercicio 3 – Tienda de Productos

Se implementa una clase base **Producto** con:

* nombre
* precioBase

Clases hijas:

**ProductoFisico**

* pesoKG
* el precio final suma $2 por kilo

**ProductoDigital**

* plataforma
* el precio final es igual al precio base

---

## Validaciones Implementadas

Los constructores incluyen validaciones como:

* saldo no puede ser negativo
* edad mayor que 0
* precio mayor que 0
* datos obligatorios

Si una validación falla se lanza un error con `throw` que es capturado usando `try-catch`.

---

## Objetivo de la Práctica

Aplicar correctamente:

* Herencia
* Encapsulamiento
* Validaciones en constructores
* Manejo de errores

---

## Autor

**U20220105**
