import { GetProduct, Product } from '../interfaces/product';

export const getProduct:GetProduct = async (container:HTMLElement|null): Promise<Product[]> => {

    addToLoader(container);

    try {
        const resp:Response = await fetch('https://fakestoreapi.com/products');
        const products:Product[] = await resp.json();
        clearContainer(container);
        return products;
    } catch (error) {
        console.error('Error Fetching products:', error);
        clearContainer(container);
        throw error; 
    }

};

function addToLoader(reference:HTMLElement|null): void {

    if (!reference) return;

    reference?.classList.add('loader-flexbox');

    const loader:HTMLElement = document.createElement('DIV');
    loader.classList.add('lds-ring');
    reference?.appendChild(loader);
    loader.innerHTML = `<div></div><div></div><div></div><div></div>`;

}

function clearContainer(container:HTMLElement|null): void {

    if (!container) return;

    while(container?.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.remove('loader-flexbox');
    container.classList.add('product-container')

}