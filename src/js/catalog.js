//https://642aedd7b11efeb759a684be.mockapi.io/photos
const productContainer = document.getElementById('container-wrapper');

async function fetchProductData() {
    try {
        const response = await fetch('https://642aedd7b11efeb759a684be.mockapi.io/photos');
        const data = await response.json();


        data.forEach((product) => {
            const { title, url, price } = product;

            // Create new element DOM
            const productCard = document.createElement('div');
            const imageElement = document.createElement('img');
            const titleElement = document.createElement('h2');
            const priceElement = document.createElement('p');

            imageElement.src = url;
            titleElement.textContent = title;
            priceElement.textContent = price;

            productCard.classList.add('text-center', 'items-center', 'mr-8', 'mb-14', 'cursor-pointer', 'p-3');
            imageElement.classList.add('pb-6');
            titleElement.classList.add('w-52', 'font-normal', 'text-xl', 'pb-7', 'ml-5');
            priceElement.classList.add('font-semibold', 'text-2xl', 'ml-4');

            // It`s I listen when mouse enter card product
            productCard.addEventListener('mouseenter', (e) => {
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

                //I`m added class for element
                container.classList.add('flex', 'flex-col');
                button.classList.add('rounded-full', 'bg-black', 'text-white', 'p-4', 'text-center', 'mb-5', 'font-medium', 'text-lg');
                fastLink.classList.add('font-normal', 'text-lg', 'text-black');
                priceElement.classList.add('pb-2');
                productCard.classList.add('z-30');

                container.appendChild(button);
                container.appendChild(fastLink);
                productCard.appendChild(container);
            });

            // It`s I listen when mouse leave card product
            productCard.addEventListener('mouseleave', (e) => {
                const container = productCard.querySelector('.flex');
                const button = productCard.querySelector('button');
                const fastLink = productCard.querySelector('a');

                // I`m added class for element
                container.classList.remove('flex', 'flex-col');
                button.classList.remove('rounded-full', 'bg-black', 'text-white', 'p-4', 'text-center', 'mb-5', 'font-medium', 'text-lg');
                fastLink.classList.remove('font-normal', 'text-lg', 'text-black');
                priceElement.classList.remove('pb-2');
                productCard.classList.remove('z-30');

                container.remove();
            });


            // Added element to container with product
            productCard.appendChild(imageElement);
            productCard.appendChild(titleElement);
            productCard.appendChild(priceElement);
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.log('Error when put date from server:', error);
    }
}

fetchProductData();

