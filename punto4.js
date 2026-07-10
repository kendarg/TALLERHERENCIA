class vehiculo{
    constructor(placa,pasajeros){
        this.placa = placa;
        this.pasajeros = pasajeros;
        
        this.reporte = function(){
            return `Placa: ${this.placa}🚌 \nPasasjerros: ${this.pasajeros}👨‍👩‍👧‍👦 \nTarifa: ${this.tarifa()}`;
        }
    }
    tarifa(){
        return 2950;
    }
  
}

class alimentador extends vehiculo{
    tarifa(){
        return 0;
    }
    
}
class busDual extends vehiculo{
    constructor(placa,pasajeros,esElectrico){
        super(placa,pasajeros);
        this.esElectrico = esElectrico;
    }
    tarifa(){
        if(this.esElectrico === true){
            return 2500;
        }else{
            return 3200;
        }
    }
}
const flota =[
    new vehiculo("awsdjashd",15),
    new alimentador("aksjdhas",40),
    new busDual("sakjdha",25,true),
]
for(const auto of flota){
    console.log(auto.reporte());
    
}