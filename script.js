// Función para mostrar una sección específica y ocultar las demás
function showSection(sectionId) {
    // Obtener todas las secciones principales
    var sections = document.querySelectorAll('main > section');
    // Ocultar todas las secciones
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Mostrar la sección específica
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Función para mostrar la categoría de productos específica y ocultar las demás
function showCategory(categoryId) {
    // Ocultar todas las secciones de categorías de productos
    var categorySections = document.querySelectorAll('.category-products');
    categorySections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Mostrar la categoría de productos específica
    var categoryToShow = document.getElementById(categoryId);
    if (categoryToShow) {
        categoryToShow.style.display = 'block';
    }
}

// Función para regresar a la sección principal desde una categoría de productos
function goBack() {
    // Ocultar todas las secciones de categorías de productos
    var categorySections = document.querySelectorAll('.category-products');
    categorySections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Mostrar la sección principal (Maquinarias en este caso)
    var maquinariasSection = document.getElementById('maquinarias');
    if (maquinariasSection) {
        maquinariasSection.style.display = 'block';
    }
    function showCategory(category) {
        // Oculta la sección de categorías
        document.getElementById('categories').style.display = 'none';
    
        // Oculta todas las secciones de productos
        let sections = document.querySelectorAll('.category-products');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    
        // Muestra la sección de productos correspondiente a la categoría seleccionada
        let selectedSection = document.getElementById(category);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }
    
    function goBack() {
        // Redirige al index.html
        window.location.href = 'camiones.html';
    }
}    