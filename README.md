# Test task for Ekapak

# Getting start

**Перед установкой и запуском проекта нужно переименовать  .env.example в .env**

## Develop from source code

```shell
bun install
bun dev
# or 
npm install
npm run dev
```

## Docker build

```shell
# Build image
docker build --pull -t bun-vite-nginx-ekapak .
# Run container
docker run --rm -d --name nginx-ekapak -p 3000:80 bun-vite-nginx-ekapak
# Stop container
docker stop nginx-ekapak
# Remove image
docker rmi bun-vite-nginx-ekapak
```

# About

## Получение данных API

Для преобразования данных использован паттерн адаптер (Adapter pattern) чтобы привести к удобному виду переменные для использования в приложении
Для примера получение списка продуктов и данные одного из них

| Полученные        | Преобразованы     |
| ----------------- | ----------------- |
| uuid              | id                |
| name              | name              |
| description       | descriptionFull   |
| slug              | slug              |
| category_uuid     | categoryId        |
| offers_min_price  | offersMinPrice    |
| offers            | offers            |
| Description       | description       |
| Мин. покупка, шт. | minPurchasePieces |
| Наличие           | isAvailable       |
| article           | article           |
| images            | images            |
| properties        | properties        |

## Tailwind кастомные цвета, шрифт и классы

Согласно шаблону Figma добавлены цвета и шрифт и класс. Переназначены стили для тегов h1, h2, h3 и p

```css
@theme {
  --font-manrope: Manrope, "sans-serif";

  --color-background: #f5f7fb;
  --color-stroke: var(--color-neutral-300);
  --color-gray: #9a9a9a;
  --color-gray-border: #dfdfdf;
  --color-black: #2c2c2c;
  --color-blue: #00b0ff;
  --color-blue-active: #43c5ff;
  --color-green: #2ac84d;
  --color-green-active: #32ee5b;
}
```

Для работы с Tailwind использовалось расширение Tailwind CSS IntelliSense

## Иконки svg как компоненты React

Из шаблоны экспортированы иконки, кроме корзины. В качестве цвета установлено "currentColor", чтобы можно было задать цвет из tailwind

```tsx
import ArrowRight from "../../assets/arrowRight.svg?react";

<ArrowRight className="w-5 h-5" />
```