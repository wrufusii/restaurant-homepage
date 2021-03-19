const createNavItem = (text) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'nav-item')
    div.setAttribute('id', `nav-${text}`)
    const navtext = document.createElement('p');
    navtext.textContent = text;
    div.appendChild(navtext);
    return div;
}

const buildNavbar = () => {
    const navBar = document.getElementById('nav-bar');
    navBar.appendChild(createNavItem('Restaurant'));
    navBar.appendChild(createNavItem('Menu'));
    navBar.appendChild(createNavItem('Contact'));
}

export default buildNavbar

