import { toggleMenuBtn } from "./funcs/menu.js";
import { toggleShoppingCart, cartIsOpen } from "./funcs/shopping-cart.js";


// Selectors
const btnMenu:Element|null = document.querySelector('#btn-menu');
const btnShopping:Element|null = document.querySelector('#shopping-cart-btn-menu');
const nav:HTMLElement|null = document.querySelector('nav');
const main:HTMLElement|null = document.querySelector('main');
const cart:HTMLDivElement|null = document.querySelector('.shopping-cart-container');

document.addEventListener('DOMContentLoaded', () => {
    addEventListeners();
})

function addEventListeners() {
    btnMenu?.addEventListener('click', () => {
        toggleMenuBtn(nav, main);
    });
    btnShopping?.addEventListener('click', () => {
        toggleShoppingCart(cart);
    })
    document.addEventListener('click', (e) => {
        cartIsOpen(e, cart)
    });
}
