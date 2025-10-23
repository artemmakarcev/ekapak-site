# Test task for Ekapak

# Getting start

**Перед установкой и запуском проекта нужно переименовать .env.example в .env**

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
  --font-base: "Manrope", ui-sans-serif, system-ui;

  --color-background: #f5f7fb;
  --color-stroke: #d4d4d4;
  --color-gray: #757575;
  --color-gray-border: #dfdfdf;
  --color-blue-border: #e5e7eb;
  --color-dark: #070707;
  --color-blue: #00b0ff;
  --color-blue-active: #43c5ff;
  --color-blue-light: #d7eefb;
  --color-green: #2ac84d;
  --color-green-active: #32ee5b;
  --color-error: #c82a2d;

  --header-bottom-height: 0px;
  --base-gap: 100px;
}
```
## Инструменты

Плагин для сортировки классов tailwind для prettier "prettier-plugin-tailwindcss"
Для работы с Tailwind использовалось расширение Tailwind CSS IntelliSense
Для работы в devTools расширение Gimli Tailwind

## Иконки svg как компоненты React

Из шаблоны экспортированы иконки, кроме корзины. В качестве цвета установлено "currentColor", чтобы можно было задать цвет из tailwind

```tsx
import ArrowRight from "../../assets/img/arrowRight.svg?react";
<ArrowRight className="h-5 w-5" />;
```

# TODO list:

## Current Tasks

- [ ] Страничка каталога / Products page
  - [ ] Отображать сетку категорий и подкатегорий
  - [x] Отображать сетку карточек товара
  - [x] Подключение к API. Должно быть реальное получение данных
  - [x] Поддержать пагинацию
- [ ] Мини-корзина
  - [ ] Кнопка «Добавить в корзину» в карточке добавляет товар в локальную корзину (localStorage и Redux)
  - [ ] Возможность открыть мини-корзину, поменять количество товара и удалить его
- [x] Типизация
  - [x] Все данные из API должны иметь строгие TS-типы/интерфейсы
  - [x] Компоненты типизировать корректно
- [ ] Tailwind
  - [x] Верстка желательно на Tailwind
  - [ ] Адаптивность
- [ ] Код и Readme
  - [ ] Репозиторий с чётким README
    - [x] как запустить проект
    - [x] краткое описание решений
    - [ ] скриншоты или ссылка на деплой
  - [x] Желательно — простая история коммитов
- [ ] Доп. задание
  - [ ] Добавить сортировку в списке товаров
  - [ ] Открытие страницы товара по клику на него с подробной информацией и адресацией
  - [ ] Поле поиска по названию (фильтрацию на фронте). Ввод в поле запускает поиск (debounce 300ms желательно)
