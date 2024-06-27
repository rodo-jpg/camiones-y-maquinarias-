// Función para mostrar una sección específica
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Función para mostrar una categoría específica
function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category-products');
    categories.forEach(category => {
        category.style.display = category.id === categoryId ? 'block' : 'none';
    });
    document.getElementById('categories').style.display = 'none';
}

// Función para regresar a la vista de categorías
function goBack() {
    const categories = document.querySelectorAll('.category-products');
    categories.forEach(category => {
        category.style.display = 'none';
    });
    document.getElementById('categories').style.display = 'block';
}

// Función para mostrar imágenes adicionales del producto
function showProductImages(productId) {
    const productImages = {
        'volvo-fh-440': [
            'img/tracto1/tracto..jpeg',
            'img/tracto1/tracto...jpeg',
            'img/tracto1/tracto..jpeg'
        ],
        'mercedes-2644': [
            'img/tracto2/tracto22.jpeg',
            'img/tracto2/tracto222.jpeg',
            'img/tracto2/tracto2222.jpeg',
            'img/tracto2/tracto22222.jpeg'
        ],
        'mercedes-2645': [
            'img/tracto3/2.jpeg',
            'img/tracto3/3.jpeg',
            'img/tracto3/4.jpeg',
            'img/tracto3/5.jpeg',
            'img/tracto3/tractofin.jpeg'
        ],
        'scania-r460': [
            'img/scania_r460_1.jpg',
            'img/scania_r460_2.jpg'
        ],
        'volvo-fh-480-hp': [
            'img/volvo_fh_480_hp_1.jpg',
            'img/volvo_fh_480_hp_2.jpg'
        ],
        'volvo-fh480': [
            'img/volvo_fh480_1.jpg',
            'img/volvo_fh480_2.jpg'
        ],
        'mack-anthem': [
            'img/mack_anthem_1.jpg',
            'img/mack_anthem_2.jpg'
        ]
    };

    const gallery = document.getElementById('product-image-gallery');
    gallery.innerHTML = '';

    if (productImages[productId]) {
        productImages[productId].forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Imagen de ${productId}`;
            gallery.appendChild(img);
        });
    }

    document.getElementById('product-images').style.display = 'block';
}

// Función para cerrar la vista de imágenes adicionales
function closeProductImages() {
    document.getElementById('product-images').style.display = 'none';
}
