//------------------------private -----------------------------------

class Elefante {
    private nombre: string;
    private raza: string;
    private edad: number;
    private color: string;

    constructor (_nombre: string, _raza: string, _edad: number, _color: string){
        this.nombre = _nombre;
        this.raza = _raza;
        this.edad = _edad;
        this.color = _color;
    }
}

const unElefante: Elefante = new Elefante ('Dumbo', 'Africano', 40, 'gris');
const dosElefante: Elefante = new Elefante ('Bambi', 'Asiatico', 20, 'marron');
console.log(unElefante.nombre, unElefante.raza); // Error de lectura por ser privada
unElefante.edad = 10; // Error de escritura por ser privada

//--------------------------protected---------------------------------

class Felino {
    protected nombre: string;
    protected raza: string;
    protected edad: number;
    protected color: string;
}

class Gato extends Felino {
    constructor (_nombre: string, _raza: string, _edad: number, _color: string){
        super();
        this.nombre = _nombre;
        this.raza = _raza;
        this.edad = _edad;
        this.color = _color;
    }
}

let unGato = new Gato ('Don Gato', 'Siames', 10, 'negro');
const dosGato: Gato = new Gato ('Garfield', 'Persa', 7, 'anaranjado');
console.log(dosGato.nombre, dosGato.raza);// Error de lectura ya que no se hereda
dosGato.edad = 10; //Error de escritura ya que no se hereda

//--------------------------public y readonly ---------------------------------

class Tortuga {
    readonly nombre: string;
    readonly raza: string;
    edad: number;
    public color: string;
    
    constructor (_nombre: string, _raza: string, _edad: number, _color: string){
        this.nombre = _nombre;
        this.raza = _raza;
        this.edad = _edad;
        this.color = _color;
    }
}

const unaTortuga: Tortuga = new Tortuga ('Loly', 'Morrocoy', 70, 'verde');
const dosTortuga: Tortuga = new Tortuga ('Fernando', 'Sulcata', 95, 'marron');
console.log(unaTortuga.nombre, unaTortuga.raza, unaTortuga.edad, unaTortuga.color); // Se puede leer nombre y raza ya que es solo lectura, edad y color son publicas
unaTortuga.nombre = 'Maria'; // Error en nombre por que no se puede modificar ya que es solo lectura
unaTortuga.raza = 'Mediterranea'; // Error en raza por que no se puede modificar ya que es solo lectura
unaTortuga.edad = 90; // La variable edad se sobre entiende que es publica por defecto se puede escribir sin problemas
unaTortuga.color = 'gris'; // La variable color es publica se puede escribir sin problemas
