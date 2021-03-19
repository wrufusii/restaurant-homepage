import buildPage from './loadPage.js'
import buildNavbar from './loadNavbar'
import buildRestaurant from './loadRestaurant'
import buildMenu from './loadMenu'

const init = () => {
    buildPage(); //buildpage skeleton but separate out info
    buildNavbar();
    buildRestaurant();
}

init();


//when tab clicked, clear content div and build new contnet
document.getElementById('nav-Restaurant').addEventListener('click', changeTab);
document.getElementById('nav-Menu').addEventListener('click', changeTab);
document.getElementById('nav-Contact').addEventListener('click', changeTab);

function changeTab(e){
    let tabClicked = this.id.split('-')[1];
    console.log(tabClicked);

    //if click, then load js file
    //make sure to clear out content as part of load
    switch (tabClicked) {
        case 'Restaurant' : 
            buildRestaurant();
            break;
        case 'Menu' :
            buildMenu();
            break;
        case 'Contact' :
            //buildContact();
            break;
    }
}
