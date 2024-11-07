import { toggleMenuBtn } from "./funcs/menu.js";
import { toggleShoppingCart, cartIsOpen } from "./funcs/shopping-cart.js";
// Selectors
const btnMenu = document.querySelector('#btn-menu');
const btnShopping = document.querySelector('#shopping-cart-btn-menu');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const cart = document.querySelector('.shopping-cart-container');
document.addEventListener('DOMContentLoaded', () => {
    addEventListeners();
});
function addEventListeners() {
    btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('click', () => {
        toggleMenuBtn(nav, main);
    });
    btnShopping === null || btnShopping === void 0 ? void 0 : btnShopping.addEventListener('click', () => {
        toggleShoppingCart(cart);
    });
    document.addEventListener('click', (e) => {
        cartIsOpen(e, cart);
    });
}
//# sourceMappingURL=index.js.map