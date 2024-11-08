import { Menu } from '../interfaces/menu';

export const toggleMenuBtn:Menu = (nav:HTMLElement|null, main:HTMLElement|null):void => {
    nav?.classList.toggle('hidden');
    main?.classList.toggle('nav-hidden');
};
