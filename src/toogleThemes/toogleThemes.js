// Toogle Theme
const toogleThemes = () => {
    const themeTarget = document.getElementById('theme');
    const themeAttribute = themeTarget.getAttribute('data-theme');

    if (themeAttribute === 'light') {
        themeTarget.setAttribute('data-theme', 'night');
    }
    else {
        themeTarget.setAttribute('data-theme', 'light');
    }
};

export default toogleThemes;