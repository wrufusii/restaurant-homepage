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
