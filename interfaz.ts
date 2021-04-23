import {question} from 'readline-sync';

interface Figura {
    superficie: number;
    perimetro: number;
    calcularSuperficie(): number;
    calcularPerimetro(): number;
}

class Cuadrado implements Figura {
    superficie;
    perimetro; 
    constructor (private x: number){}
    calcularSuperficie(){
        return this.x*this.x;
    }
    calcularPerimetro(){
        return this.x*4;
    }
} 

class Rectangulo implements Figura {
    superficie;
    perimetro; 
    constructor (private x: number, private y:number){}
    calcularSuperficie(){
        return this.x*this.y;
    }
    calcularPerimetro(){
        return this.x*2+this.y*2;
    }
} 

let cuadrado1: Cuadrado;
console.log('CUADRADO:');
let lado: number = +question('Introduzca el lado: '); 
cuadrado1 = new Cuadrado(lado);
console.log('Superficie: ', cuadrado1.calcularSuperficie(), 'Perimetro: ',cuadrado1.calcularPerimetro());

let rectangulo1: Rectangulo;
console.log('RECTANGULO:');
let base: number = +question('Introduzca la base: '); 
let altura: number = +question('Introduzca la altura: '); 
rectangulo1 = new Rectangulo(base,altura);
console.log('Superficie: ', rectangulo1.calcularSuperficie(), 'Perimetro: ', rectangulo1.calcularPerimetro());