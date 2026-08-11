const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

if (localStorage.getItem('darkMode') === 'true') {
    htmlElement.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});
