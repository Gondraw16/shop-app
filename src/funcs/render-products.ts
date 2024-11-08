import { Product, RenderProducts } from '../interfaces/product';

export const renderProducts:RenderProducts = (container:HTMLElement|null, products:Product[]) => {

    products.forEach( (product:Product) =>  {

        const { id, title:ProductTitle, description, category, image, price:ProductPrice, rating:{count, rate} } = product;

        let shorcutTitle:string =  ProductTitle.length > 38 ? `${ProductTitle.substring(0, 38)}...` : ProductTitle;

        const card:HTMLElement = document.createElement('DIV');
        card.classList.add('product-card'); 

        const contentImg = document.createElement('DIV');
        contentImg.classList.add('content-img');

        const img:HTMLImageElement = document.createElement('img');
        img.src = `${ image }`;
        img.alt = `${ ProductTitle }`
        
        const info = document.createElement('DIV');
        info.classList.add('content-info');

        const title:HTMLAnchorElement = document.createElement('a');
        title.textContent = shorcutTitle;
        title.href = `product?id=${id}`
        title.classList.add('product-title');

        const price:HTMLElement = document.createElement('P');
        price.textContent = `$${ProductPrice}`;
        price.classList.add('product-price');

        const contentBtn:HTMLElement = document.createElement('DIV');
        contentBtn.classList.add('content-btn');

        const likeBtn:HTMLButtonElement = document.createElement('button');
        likeBtn.type = 'button';
        likeBtn.classList.add('rounded-button', 'like-btn');
        likeBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;

        const addCartBtn:HTMLButtonElement = document.createElement('button');
        addCartBtn.type = 'button';
        addCartBtn.classList.add('rounded-button', 'add-cart-btn');
        addCartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;

        const viewDetaillsBtn:HTMLButtonElement = document.createElement('button');
        viewDetaillsBtn.type = 'button';
        viewDetaillsBtn.classList.add('rounded-button', 'add-cart-btn');
        viewDetaillsBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;

        contentImg.appendChild(img);
        contentBtn.appendChild(likeBtn);
        contentBtn.appendChild(addCartBtn);
        contentBtn.appendChild(viewDetaillsBtn);

        info.appendChild(title);
        info.appendChild(price);
        info.appendChild(contentBtn);

        card.appendChild(contentImg);
        card.appendChild(info);
        container?.appendChild(card);

    });    

}