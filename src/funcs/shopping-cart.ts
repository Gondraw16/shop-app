import { shoppingCart } from '../interfaces/shopping-cart';

export const toggleShoppingCart = (cart:HTMLDivElement|null):void => {

    cart?.classList.toggle('show');

}

export const cartIsOpen:shoppingCart = (e: Event, reference:HTMLDivElement|null):void => {

    const target:HTMLElement|null = e.target as HTMLElement | null;

    if(target?.id === 'shopping-cart-btn-menu') return;

    if (target && reference && !reference.contains(target)) {
        reference?.classList.remove('show');
    } else if(target?.classList.contains('close-shopping-cart')) {
        reference?.classList.remove('show');
    }

}