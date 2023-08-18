const productContainer = document.getElementById('container-wrapper');

async function fetchProductData() {
    try {
        const response = await fetch('https://642aedd7b11efeb759a684be.mockapi.io/photos');
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server');
        }
        const data = await response.json();

        data.forEach((product, index) => {
            const { title, url, price, newPrice, discount } = product;

            // Create new element DOM
            const productCard = document.createElement('div');
            const priceContainer = document.createElement('div');
            const imageElement = document.createElement('img');
            const imageContainer = document.createElement('div');
            const discounte = document.createElement('p');
            const titleElement = document.createElement('h2');
            const priceElement = document.createElement('p');
            const newPriceElement = document.createElement('p');
            const container = document.createElement('div');
            const button = document.createElement('button');
            const fastLink = document.createElement('a');

            const buttonType = 'submit';
            const fastLinkUrl = '#!';

            const buttonTextContent = 'Додати'
            const fastLinkTextContent = 'Швидке замовлення';

            button.type = buttonType;
            button.textContent = buttonTextContent;
            fastLink.href = fastLinkUrl;
            fastLink.textContent = fastLinkTextContent;
            imageElement.src = url;
            titleElement.textContent = title;
            priceElement.textContent = price;
            newPriceElement.textContent = newPrice;
            discounte.textContent = discount;
            
            productCard.classList.add('text-center', 'items-center', 'mt-5', 'mb-14', 'mr-4', 'cursor-pointer');
            imageContainer.classList.add('relative');
            imageElement.classList.add('pb-6', 'w-full', 'h-full', 'xl:w-full', 'xl:h-full');
            discounte.classList.add('absolute', 'bottom-8', 'left-2', 'rounded-md', 'font-sans', 'font-medium', 'text-base', 'py-1', 'px-3', 'sm:py-2', 'sm:px-5', 'sm:text-lg', 'xl:px-3', 'xl:py-1', 'xl:text-xl', 'bg-[#DD432E]', 'text-white');
            titleElement.classList.add( 'xl:w-[220px]', 'font-sans', 'font-normal', 'text-base', 'sm:text-xl', 'pb-2', 'xl:pb-5', 'xl:ml-2');
            priceContainer.classList.add('flex', 'gap-1', 'xl:gap-3', 'text-center', 'items-center', 'pb-6');
            priceElement.classList.add('font-normal', 'text-gray-300', 'text-sm', 'xl:text-lg', 'line-through');
            newPriceElement.classList.add('font-semibold', 'text-lg', 'xl:text-2xl', 'text-orange-600');
            container.classList.add('flex', 'flex-col');
            button.classList.add('rounded-full', 'bg-[#1A303F]', 'text-white', 'p-2', 'md:p-4', 'text-center', 'mb-5', 'font-medium', 'text-lg');
            fastLink.classList.add('font-normal', 'text-sm', 'md:text-lg', 'text-black');

            
            // Added elements to the container with product
            imageContainer.appendChild(imageElement);
            imageContainer.appendChild(discounte);
            productCard.appendChild(imageContainer);
            productCard.appendChild(titleElement);
            priceContainer.appendChild(priceElement);
            priceContainer.appendChild(newPriceElement);
            productCard.appendChild(priceContainer);
            productContainer.appendChild(productCard);
            container.appendChild(button);
            container.appendChild(fastLink);
            productCard.appendChild(container);
        });
    } catch (error) {
        console.log('Error when putting data from the server:', error);
    }
}

fetchProductData();