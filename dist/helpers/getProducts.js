var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getProduct = (container) => __awaiter(void 0, void 0, void 0, function* () {
    addToLoader(container);
    try {
        const resp = yield fetch('https://fakestoreapi.com/products');
        const products = yield resp.json();
        clearContainer(container);
        return products;
    }
    catch (error) {
        console.error('Error Fetching products:', error);
        clearContainer(container);
        throw error;
    }
});
function addToLoader(reference) {
    if (!reference)
        return;
    reference === null || reference === void 0 ? void 0 : reference.classList.add('loader-flexbox');
    const loader = document.createElement('DIV');
    loader.classList.add('lds-ring');
    reference === null || reference === void 0 ? void 0 : reference.appendChild(loader);
    loader.innerHTML = `<div></div><div></div><div></div><div></div>`;
}
function clearContainer(container) {
    if (!container)
        return;
    while (container === null || container === void 0 ? void 0 : container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.remove('loader-flexbox');
    container.classList.add('product-container');
}
//# sourceMappingURL=getProducts.js.map