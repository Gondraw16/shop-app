import { toggleMenuBtn } from "./funcs/menu.js";
import { renderProducts } from "./funcs/render-products.js";
import { toggleShoppingCart, cartIsOpen } from "./funcs/shopping-cart.js";
import { getProduct } from "./helpers/getProducts.js";


// Selectors
const btnMenu:Element|null = document.querySelector('#btn-menu');
const btnShopping:Element|null = document.querySelector('#shopping-cart-btn-menu');
const nav:HTMLElement|null = document.querySelector('nav');
const main:HTMLElement|null = document.querySelector('main');
const cart:HTMLDivElement|null = document.querySelector('.shopping-cart-container');

document.addEventListener('DOMContentLoaded', () => {
    addEventListeners();

     getProduct(main)
        .then(products => renderProducts(main, products))
        .catch(error => console.log(error))

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
