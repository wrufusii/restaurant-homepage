import createElement from './createElem'

const copySection = createElement('div', 'copy'); //SEPARATE BELOW
const subtitle = createElement('h2', undefined, 'Seva Café pays homage to the Irani cafés and the food of all Bombay.')
const para = createElement('p', 'para', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus ultricies velit vitae feugiat. Praesent id dui vel augue pellentesque fermentum. In hac habitasse platea dictumst. Aenean sagittis bibendum erat, sit amet facilisis justo consequat dignissim. Vestibulum metus purus, posuere id nisl pharetra, lobortis suscipit est.');
const imgContainer = createElement('div', undefined, undefined, 'img-container')
const blockImg = createElement('IMG', 'block-img');
blockImg.setAttribute('src', 'https://images.prismic.io/dishoom/f58769918005b95f002e02b226baf83129754a02_yazdani.jpg');

const buildRestaurant = () => {
    const contentContainer = document.getElementById('container');
    contentContainer.innerHTML = "";
    contentContainer.appendChild(copySection).appendChild(subtitle);
    copySection.appendChild(para);
    contentContainer.appendChild(imgContainer).appendChild(blockImg);
}

export default buildRestaurant