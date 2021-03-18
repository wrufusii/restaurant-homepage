import createElement from './createElem'

const welcomeSection = createElement('div', 'welcome');
const ornament = createElement('p','ornament', 'सभी का स्वागत');
const title = createElement('h1', 'title', 'Seva Café')
const wrapper = createElement('div', 'wrapper');
const navBar = createElement('div', 'nav-bar'); 
const contentContainer = createElement('div', 'container');

const buildPage = () => {

    const contentDiv = document.getElementById('content');

    //welcome 
    welcomeSection.appendChild(ornament);
    welcomeSection.appendChild(title)
    
    //skeleton
    wrapper.appendChild(navBar);
    wrapper.appendChild(contentContainer)

    //build up
    contentDiv.appendChild(welcomeSection);
    contentDiv.appendChild(wrapper);
}

export default buildPage