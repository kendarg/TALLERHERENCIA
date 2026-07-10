class restaurante{
    constructor (nombre,categoria,calificacion)
{
this.nombre = nombre;
this.categoria = categoria;
this.calificacion = calificacion;
this.describir = function(){
    return`Nombre: ${this.nombre} \nCategoria: ${this.categoria} \nCalificacion: ${this.calificacion}⭐ \n---------`
}
this.estaBienCalificado = function(){
    return this.calificacion > 4.4;
}
}
}
const p = new restaurante("Corral","Hamburguesas",4.5);
console.log(p.describir());
console.log(p.estaBienCalificado());



