class peliculas{
    constructor (titulo,duracion){
    this.titulo = titulo;
    this.duracion = duracion;
    this.precioBase = 15000;

    this.precioBoleta = function(){
        return this.precioBase;
        }
    this.ficha = function(){
        return `Titulo: ${this.titulo} \nPrecio: $${this.precioBoleta()} \nDuracion: ${this.duracion} Minutos ⏱️ \n---------`
    }

    }
}
class peliculaVip extends peliculas{
    constructor(titulo,duracion,comida){
        super(titulo,duracion);
        this.comida = comida;
        this.precioBoleta = function(){
            if(this.comida === true){
            return 25000 + 18000;
            }else {
            return  25000;
            }
        }
    }
}
const p = new peliculas("Harry Potter",180);
const p2 = new peliculaVip("Harry Potter", 180, true);

console.log(p.ficha());
console.log(p2.ficha());


