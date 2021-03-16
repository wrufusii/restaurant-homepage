const createElement = (tag = "", id = "", content = "", classes = "") => {
    const elem = document.createElement(tag);
    elem.setAttribute('id', id);
    elem.setAttribute('class', classes);
    elem.textContent = content;
    return elem;
} ;

const welcomeSection = createElement('div', 'welcome');
const ornament = createElement('p','ornament', 'सभी का स्वागत');
const title = createElement('h1', 'title', 'Seva Café')
const infoSection = createElement('div', 'info');
const navBar = createElement('div', 'nav-bar');
const contentContainer = createElement('div', 'container');
const copySection = createElement('div', 'copy');
const subtitle = createElement('h2', undefined, 'Seva Café pays homage to the Irani cafés and the food of all Bombay.')
const para = createElement('p', 'para', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus ultricies velit vitae feugiat. Praesent id dui vel augue pellentesque fermentum. In hac habitasse platea dictumst. Aenean sagittis bibendum erat, sit amet facilisis justo consequat dignissim. Vestibulum metus purus, posuere id nisl pharetra, lobortis suscipit est.');
const imgContainer = createElement('div', undefined, undefined, 'img-container')
const blockImg = createElement('IMG', 'block-img');
blockImg.setAttribute('src', 'https://images.prismic.io/dishoom/f58769918005b95f002e02b226baf83129754a02_yazdani.jpg');

console.log(blockImg);

const buildPage = () => {

    const contentDiv = document.getElementById('content');

    //welcome 
    welcomeSection.appendChild(ornament);
    welcomeSection.appendChild(title)
    
    //info
    infoSection.appendChild(navBar);
    infoSection.appendChild(contentContainer).appendChild(copySection).appendChild(subtitle);
    copySection.appendChild(para);
    contentContainer.appendChild(imgContainer).appendChild(blockImg);

    //build
    contentDiv.appendChild(welcomeSection);
    contentDiv.appendChild(infoSection);
}

export default buildPage