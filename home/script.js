// Показать/скрыть поле поиска
document.getElementById('showSearchBtn').addEventListener('click', () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
});

// Фильтрация элементов по содержимому
document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const temas = document.querySelectorAll('#tema0f, #tema1f, #tema2f, #tema3f, #tema4f, #tema5f');

    temas.forEach((tema) => {
        const textContent = tema.textContent.toLowerCase();
        if (textContent.includes(filter)) {
            tema.style.display = ''; // Показывать элемент
        } else {
            tema.style.display = 'none'; // Скрывать элемент
        }
    });
});
