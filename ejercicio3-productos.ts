// Clase Base
class Producto {
  protected nombre: string;
  protected precioBase: number;

  constructor(nombre: string, precioBase: number) {
    if (!nombre) throw new Error("El nombre es obligatorio");
    if (precioBase <= 0)
      throw new Error("El precio debe ser mayor a 0");

    this.nombre = nombre;
    this.precioBase = precioBase;
  }

  public calcularPrecioFinal(): number {
    return this.precioBase;
  }
}

// Producto Físico
class ProductoFisico extends Producto {
  private pesoKG: number;

  constructor(nombre: string, precioBase: number, pesoKG: number) {
    super(nombre, precioBase);

    if (pesoKG <= 0)
      throw new Error("El peso debe ser mayor a 0");

    this.pesoKG = pesoKG;
  }

  public override calcularPrecioFinal(): number {
    const costoEnvio = this.pesoKG * 2;
    return this.precioBase + costoEnvio;
  }
}

// Producto Digital
class ProductoDigital extends Producto {
  private plataforma: string;

  constructor(nombre: string, precioBase: number, plataforma: string) {
    super(nombre, precioBase);

    if (!plataforma)
      throw new Error("La plataforma es obligatoria");

    this.plataforma = plataforma;
  }

  public override calcularPrecioFinal(): number {
    return this.precioBase;
  }
}

// Prueba
console.log("---- TIENDA DE PRODUCTOS ----");

try {
  const producto1 = new ProductoFisico("Laptop", 800, 3);
  console.log(
    `Precio final del producto físico: $${producto1
      .calcularPrecioFinal()
      .toFixed(2)}`
  );
} catch (error: any) {
  console.log(`Error detectado: ${error.message}`);
}

console.log("---- FIN DEL PROCESO ----");