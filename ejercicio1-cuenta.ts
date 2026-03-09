// Clase Base
class Cuenta {
  protected titular: string;
  protected saldo: number;

  constructor(titular: string, saldo: number) {
    if (!titular) throw new Error("El titular es obligatorio");
    if (saldo < 0) throw new Error("El saldo no puede ser negativo");

    this.titular = titular;
    this.saldo = saldo;
  }

  public mostrarInformacion(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo actual: $${this.saldo.toFixed(2)}`);
  }
}

// Clase Hija
class CuentaAhorro extends Cuenta {
  private tasaInteres: number;

  constructor(titular: string, saldo: number, tasaInteres: number) {
    super(titular, saldo);

    if (tasaInteres <= 0)
      throw new Error("La tasa de interés debe ser mayor a 0");

    this.tasaInteres = tasaInteres;
  }

  public aplicarInteres(): void {
    const interes = this.saldo * this.tasaInteres;
    this.saldo += interes;
    console.log(`Interés aplicado: $${interes.toFixed(2)}`);
  }
}

// Prueba con try-catch
console.log("---- SISTEMA DE AHORROS ----");

try {
  const cuenta1 = new CuentaAhorro("Jose Gomez", 1000, 0.05);
  cuenta1.mostrarInformacion();
  cuenta1.aplicarInteres();
  cuenta1.mostrarInformacion();
} catch (error: any) {
  console.log(`Error detectado: ${error.message}`);
}

console.log("---- FIN DEL PROCESO ----");