const productContainer = document.getElementById('container-wrapper');
const hoverClassPrefix = 'product-hover-';

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

            imageElement.src = url;
            titleElement.textContent = title;
            priceElement.textContent = price;
            newPriceElement.textContent = newPrice;
            discounte.textContent = discount;

            productCard.classList.add('text-center', 'items-center', 'mt-5', 'mb-14', 'mr-4', 'cursor-pointer');
            imageElement.classList.add('pb-6', 'w-full', 'h-full', 'xl:w-full', 'xl:h-full');
            titleElement.classList.add( 'xl:w-[220px]', 'font-sans', 'font-normal', 'text-base', 'sm:text-xl', 'pb-2', 'xl:pb-10', 'xl:ml-2');
            imageContainer.classList.add('relative');
            discounte.classList.add('absolute', 'bottom-8', 'left-2', 'rounded-md', 'font-sans', 'font-medium', 'text-lg', 'py-2', 'px-7', 'bg-[#DD432E]', 'text-white');
            priceContainer.classList.add('flex', 'gap-1', 'xl:gap-3', 'text-center');
            priceElement.classList.add('font-normal', 'text-gray-300', 'text-sm', 'xl:text-lg', 'line-through');
            newPriceElement.classList.add('font-semibold', 'text-lg', 'xl:text-2xl', 'text-orange-600');

            // Added elements to the container with product
            imageContainer.appendChild(imageElement);
            imageContainer.appendChild(discounte);
            productCard.appendChild(imageContainer);
            productCard.appendChild(titleElement);
            priceContainer.appendChild(priceElement);
            priceContainer.appendChild(newPriceElement);
            productCard.appendChild(priceContainer);
            productContainer.appendChild(productCard);

            // Event listener when mouse enters the product card
            productCard.addEventListener('mouseenter', handleMouseEnter);

            // Event listener when mouse leaves the product card
            productCard.addEventListener('mouseleave', handleMouseLeave);

            function handleMouseEnter(e) {
                const container = document.createElement('div');
                const button = document.createElement('button');
                const fastLink = document.createElement('a');

                const buttonType = 'submit';
                const fastLinkUrl = '#!';
                const buttonTextContent = 'Додати';
                const fastLinkTextContent = 'Швидке замовлення';

                button.type = buttonType;
                button.textContent = buttonTextContent;
                fastLink.href = fastLinkUrl;
                fastLink.textContent = fastLinkTextContent;

                // Add classes for elements
                container.classList.add(`${hoverClassPrefix}${index}`, 'flex', 'flex-col');
                button.classList.add(`${hoverClassPrefix}${index}`, 'rounded-full', 'bg-[#1A303F]', 'text-white', 'p-2', 'md:p-4', 'text-center', 'mb-5', 'font-medium', 'text-lg');
                fastLink.classList.add(`${hoverClassPrefix}${index}`, 'font-normal', 'text-sm', 'md:text-lg', 'text-black');
                priceContainer.classList.add('pb-5');

                container.appendChild(button);
                container.appendChild(fastLink);
                productCard.appendChild(container);
            }

            function handleMouseLeave(e) {
                const container = productCard.querySelector(`.${hoverClassPrefix}${index}`);
                const button = productCard.querySelector(`.${hoverClassPrefix}${index}`);
                const fastLink = productCard.querySelector(`.${hoverClassPrefix}${index}`);

                // Remove classes and remove container
                container.classList.remove(`${hoverClassPrefix}${index}`, 'flex', 'flex-col');
                button.classList.remove(`${hoverClassPrefix}${index}`, 'rounded-full', 'bg-black', 'text-white', 'p-4', 'text-center', 'mb-5', 'font-medium', 'text-lg');
                fastLink.classList.remove(`${hoverClassPrefix}${index}`, 'font-normal', 'text-lg', 'text-black');
                priceContainer.classList.remove('pb-5');

                container.remove();
            }
        });
    } catch (error) {
        console.log('Error when putting data from the server:', error);
    }
}

fetchProductData();