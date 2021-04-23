abstract class Persona {
    public nombre: string;

    abstract Registrar();
    abstract Consultar ();
    abstract Sueldo ();
} 


class Administrativo extends Persona {

    public area: string;

    Registrar(){
        console.log('Registra.... ');

    };
    Consultar (){
        console.log('Consulta.... ');
    };
    Sueldo(){
        console.log('Muestra Sueldo.... ');
    };

} 

class Docente extends Persona {

    public Cargo: string;
    public HorasTrabajadas: number ;

    Registrar(){
        console.log('Registra.... ');

    };
    Consultar (){
        console.log('Consulta.... ');
    };
    Sueldo(){
        console.log('Muestra Sueldo.... ');
    };

} 

class PersonalLimpieza extends Persona {

    public Turno: string;

    Registrar(){
        console.log('Registra.... ');

    };
    Consultar (){
        console.log('Consulta.... ');
    };
    Sueldo(){
        console.log('Muestra Sueldo.... ');
    };

} 