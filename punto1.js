function restaurante(nombre,categoria,calificacion){
this.nombre = nombre;
this.categoria = categoria;
this.calificacion = calificacion;
this.describir = function(){
    return`Nombre: ${nombre} \nCategoria: ${categoria} \nCalificacion: ${calificacion}⭐ \n---------`
}
this.estaBienCalificado = function(){
    return this.calificacion > 4.4;
}
}
const p = new restaurante("Corral","Hamburguesas",4.5);
console.log(p.describir());
console.log(p.estaBienCalificado());



