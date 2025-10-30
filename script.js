// Основная функция запуска приложения
function initApp() {
    const app = document.getElementById('app');
    
    // Создаем контейнер
    const container = document.createElement('div');
    container.className = 'container';
    
    // Создаем шапку
    const header = document.createElement('header');
    header.className = 'header';
    
    const title = document.createElement('h1');
    title.textContent = 'Магазин Крутых Гаджетов';
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Верстка на чистом JavaScript - это мощно!';
    
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // Создаем сетку для товаров
    const productsGrid = document.createElement('div');
    productsGrid.className = 'products-grid';
    
    // Данные товаров
    const products = [
        {
            id: 1,
            name: 'Умные Часы',
            description: 'Отслеживание активности, уведомления и многое другое.',
            price: '12 999 ₽',
            image: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Smart+Watch'
        },
        {
            id: 2, 
            name: 'Беспроводные Наушники',
            description: 'Премиальное качество звука и шумоподавление.',
            price: '8 499 ₽',
            image: 'https://via.placeholder.com/300x200/50E3C2/FFFFFF?text=Headphones'
        },
        {
            id: 3,
            name: 'Портативная Колонка',
            description: 'Мощный звук в компактном корпусе. Водонепроницаемость.',
            price: '5 299 ₽', 
            image: 'https://via.placeholder.com/300x200/B8E986/FFFFFF?text=Speaker'
        }
    ];
    
    // Создаем карточки для каждого товара
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Собираем все вместе
    container.appendChild(header);
    container.appendChild(productsGrid);
    app.appendChild(container);
}

// Функция для создания карточки товара
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Изображение
    const image = document.createElement('img');
    image.className = 'card__image';
    image.src = product.image;
    image.alt = product.name;
    
    // Заголовок
    const title = document.createElement('h3');
    title.className = 'card__title';
    title.textContent = product.name;
    
    // Описание
    const description = document.createElement('p');
    description.className = 'card__description';
    description.textContent = product.description;
    
    // Цена
    const price = document.createElement('span');
    price.className = 'card__price';
    price.textContent = product.price;
    
    // Кнопка
    const button = document.createElement('button');
    button.className = 'card__button';
    button.textContent = 'В корзину';
    
    // Обработчик для кнопки
    button.addEventListener('click', function() {
        handleAddToCart(product, button);
    });
    
    // Собираем карточку
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(button);
    
    return card;
}

// Обработчик добавления в корзину
function handleAddToCart(product, button) {
    const originalText = button.textContent;
    
    button.textContent = 'Добавлено! ✅';
    button.disabled = true;
    
    // Можно добавить логику для реальной корзины
    console.log(`Товар "${product.name}" добавлен в корзину`);
    
    // Возвращаем исходное состояние через 2 секунды
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Запускаем приложение когда страница загрузится
document.addEventListener('DOMContentLoaded', initApp);