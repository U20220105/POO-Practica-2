// Clase Base
class Persona {
  protected nombre: string;
  protected edad: number;

  constructor(nombre: string, edad: number) {
    if (!nombre) throw new Error("El nombre es obligatorio");
    if (edad <= 0) throw new Error("La edad debe ser mayor a 0");

    this.nombre = nombre;
    this.edad = edad;
  }

  public presentarse(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Clase Hija Estudiante
class Estudiante extends Persona {
  private carnet: string;

  constructor(nombre: string, edad: number, carnet: string) {
    super(nombre, edad);

    if (!carnet) throw new Error("El carnet es obligatorio");

    this.carnet = carnet;
  }

  public override presentarse(): void {
    console.log(
      `Soy el estudiante ${this.nombre}, tengo ${this.edad} años y mi carnet es ${this.carnet}.`
    );
  }
}

// Clase Hija Docente
class Docente extends Persona {
  private especialidad: string;

  constructor(nombre: string, edad: number, especialidad: string) {
    super(nombre, edad);

    if (!especialidad)
      throw new Error("La especialidad es obligatoria");

    this.especialidad = especialidad;
  }

  public override presentarse(): void {
    console.log(
      `Soy el docente ${this.nombre}, especialista en ${this.especialidad}.`
    );
  }
}

// Pruebas
console.log("---- REGISTRO ACADÉMICO ----");

try {
  const estudiante1 = new Estudiante("Carlos", 20, "2026-001");
  estudiante1.presentarse();

  const docente1 = new Docente("Ana", 35, "Programación");
  docente1.presentarse();
} catch (error: any) {
  console.log(`Error detectado: ${error.message}`);
}

console.log("---- FIN DEL PROCESO ----");