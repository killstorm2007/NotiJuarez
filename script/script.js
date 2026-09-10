document.addEventListener('DOMContentLoaded', () => {
    const inputBuscador = document.getElementById('buscador');
    const tarjetasNoticias = document.querySelectorAll('.noticia');

    inputBuscador.addEventListener('keyup', (e) => {
        const textoBusqueda = e.target.value.toLowerCase();

        tarjetasNoticias.forEach(noticia => {
            const titulo = noticia.querySelector('h2').textContent.toLowerCase();
            const descripcion = noticia.querySelector('h3').textContent.toLowerCase();

            // Comprobar si el texto ingresado coincide con el título o el contenido
            if (titulo.includes(textoBusqueda) || descripcion.includes(textoBusqueda)) {
                noticia.style.display = 'block';
            } else {
                noticia.style.display = 'none';
            }
        });
    });
});