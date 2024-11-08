export const toggleShoppingCart = (cart) => {
    cart === null || cart === void 0 ? void 0 : cart.classList.toggle('show');
};
export const cartIsOpen = (e, reference) => {
    const target = e.target;
    if ((target === null || target === void 0 ? void 0 : target.id) === 'shopping-cart-btn-menu')
        return;
    if (target && reference && !reference.contains(target)) {
        reference === null || reference === void 0 ? void 0 : reference.classList.remove('show');
    }
    else if (target === null || target === void 0 ? void 0 : target.classList.contains('close-shopping-cart')) {
        reference === null || reference === void 0 ? void 0 : reference.classList.remove('show');
    }
};
//# sourceMappingURL=shopping-cart.js.map