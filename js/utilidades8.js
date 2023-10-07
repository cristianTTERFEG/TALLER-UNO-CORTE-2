function generarContraseña() {
    const longitud = parseInt(document.getElementById('longitud').value);
    const incluirMayusculas = document.getElementById('mayusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirCaracteresEspeciales = document.getElementById('caracteresEspeciales').checked;

    if (isNaN(longitud) || longitud <= 0) {
        alert('Por favor, ingrese una longitud valida.');
        return;
    }

    const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresNumeros = '0123456789';
    const caracteresEspeciales = '!@#$%^&*()_-+=<>?';

    let caracteresDisponibles = caracteresMinusculas;

    if (incluirMayusculas) {
        caracteresDisponibles += caracteresMayusculas;
    }

    if (incluirNumeros) {
        caracteresDisponibles += caracteresNumeros;
    }

    if (incluirCaracteresEspeciales) {
        caracteresDisponibles += caracteresEspeciales;
    }

    let contrasena = '';
    const caracteresDisponiblesLength = caracteresDisponibles.length;

    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresDisponiblesLength);
        contrasena += caracteresDisponibles.charAt(randomIndex);
    }

    document.getElementById('resultado').textContent = contrasena;
}
