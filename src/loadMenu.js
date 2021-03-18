import createElement from './createElem'

const createMenuItem = (dishObject) => {
    const menuItem = createElement('div', undefined, undefined, 'menu-item')
    const menuItemCopy = createElement('div', undefined, undefined, 'menu-item-copy')
    const menuItemPrice = createElement('div', undefined, undefined, 'menu-item-price')
    const dishName = createElement('h3', undefined, dishObject.name, 'dish-name')
    const dishDescription = createElement('p', undefined, dishObject.description, 'dish-description')
    const dishPrice = createElement('p', undefined, dishObject.price, 'dish-price');
    menuItemPrice.appendChild(dishPrice);
    menuItemCopy.appendChild(dishName)
    menuItemCopy.appendChild(dishDescription)
    menuItem.appendChild(menuItemCopy)
    menuItem.appendChild(menuItemPrice);
    return menuItem;
  }

const currentMenu = [
    {
        name: 'A dish',
        description: 'Why don\'t you have this delicious dish',
        price: "5.00"
    },
    {
        name: 'Another dish',
        description: 'Have this one instead',
        price: "3.00"
    }
];

let menuElems = [];
currentMenu.forEach(item => menuElems.push(createMenuItem(item)))

const buildMenu = () => {
    const contentContainer = document.getElementById('container');
    const menu = createElement('div', 'menu');
    contentContainer.appendChild(menu);

    menuElems.forEach(elem => menu.appendChild(elem))
}

export default buildMenu