class usuarioNequi{
constructor (nombre,saldo){
this.nombre = nombre;
this.saldo = saldo;
}
enviar(monto){
if(monto > this.saldo){
    return `Saldo insuficiente 💵 \n--------`;
} else{
    this.saldo -= monto;
    return`Nombre: ${this.nombre} \nSaldo: ${this.saldo} \n---------`
}
}
}
class comercioNequi extends usuarioNequi{
    constructor (nombre,saldo,comision){
        super(nombre,saldo); 
        this.comision = comision;
    }
    enviar(monto){
            this.saldo += this.comision
            return super.enviar(monto);
        }
}
const p = new usuarioNequi("Esteban", 10000);
const p2 = new comercioNequi("Esteban" ,10000,2000);
console.log(p.enviar(5000));
console.log(p2.enviar(5000));
//* Debo de agragar el monto en el console.log(p2.enviar(5000)); para que guncione
