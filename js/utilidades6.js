const libros = [];

function agregarLibro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const anio = document.getElementById('anio').value;

    if (titulo && autor && anio) {
        libros.push({ titulo, autor, anio });
        alert('Libro agregado con éxito.');
        // Limpiar los campos después de agregar
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('anio').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function buscarLibro() {
    const tituloBuscar = document.getElementById('tituloBuscar').value;

    if (tituloBuscar) {
        const libroEncontrado = libros.find(libro => libro.titulo === tituloBuscar);

        if (libroEncontrado) {
            const resultado = `Título: ${libroEncontrado.titulo}, Autor: ${libroEncontrado.autor}, 
            Año de Publicación: ${libroEncontrado.anio}`;
            document.getElementById('resultado').textContent = resultado;
        } else {
            document.getElementById('resultado').textContent = 'Libro no encontrado.';
        }
    } else {
        alert('Por favor, ingresa un título válido.');
    }
}
