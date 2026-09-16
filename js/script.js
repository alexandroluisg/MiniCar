class Carro {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = 0;
        this.posicion = 0;
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        console.log("El carro está encendido");
    }

    acelerar(cantidad) {
        if (this.encendido === true) {
            this.velocidad = this.velocidad + cantidad;
            this.posicion = this.posicion + cantidad;
            carroVisual.style.left = miCarro.posicion + "px";
            console.log("Velocidad:", this.velocidad);
            console.log("Posición:", this.posicion);
        } else {
            console.log("El carro esta apagado, no puede acelerar");
        }
    }

    frenar(cantidad) {
        if (this.velocidad > 0) {
            this.velocidad = this.velocidad - cantidad;
            console.log("Velocidad:", this.velocidad);
        } else {
            console.log("El carro esta detenido");
        }
    }

    mover() {
    if (this.posicion < carretera.clientWidth - carroVisual.clientWidth) {
        this.posicion = this.posicion + this.velocidad;
    }
}

    apagar() {
        if (this.velocidad === 0) {
            this.encendido = false;
            console.log("El carro está apagado");
        } else {
            console.log("El carro debe estar detenido para apagarlo");
        }
    }
}
const miCarro = new Carro("Toyota", "Corolla", "Rojo");

const estado = document.getElementById("estado");
console.log(miCarro);

const velocidad = document.getElementById("velocidad");

const botonEncender = document.getElementById("btnEncender");

botonEncender.addEventListener("click", () => {
    miCarro.encender();
    estado.textContent = "Encendido";
});

const botonAcelerar = document.getElementById("btnAcelerar");

botonAcelerar.addEventListener("click", () => {
    miCarro.acelerar(20);

    velocidad.textContent = miCarro.velocidad;
});

const botonFrenar = document.getElementById("btnFrenar");

botonFrenar.addEventListener("click", () => {
    miCarro.frenar(20);
    velocidad.textContent = miCarro.velocidad;
    carroVisual.style.left = miCarro.velocidad + "px";
})

const botonApagar = document.getElementById("btnApagar");

botonApagar.addEventListener("click", () => {
    miCarro.apagar();
    if (miCarro.encendido === false) {
        estado.textContent = "Apagado";
    }
});

const carroVisual = document.getElementById("carro");
const carretera = document.getElementById("carretera");
carroVisual.style.left = "0px";

setInterval(() => {
    miCarro.mover();
    carroVisual.style.left = miCarro.posicion + "px";
}, 100);