// esto genera un numero aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinaNumero() {
    const numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    const mensaje = document.getElementById("mensaje");

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    } else {
        if (numeroUsuario === numeroAleatorio) {
            mensaje.textContent = `¡Felicitaciones! Adivinaste el número ${numeroAleatorio}.`;
        } else if (numeroUsuario < numeroAleatorio) {
            mensaje.textContent = "El número es más alto. Intenta de nuevo.";
        } else {
            mensaje.textContent = "El número es más bajo. Intenta de nuevo.";
        }
    }
}





