import LogoSvg from "../../assets/img/logo.svg";
import MailIcon from "../../assets/img/mail.svg?react";
import PhoneIcon from "../../assets/img/phone.svg?react";
import CircleIcon from "../../assets/img/circle.svg?react";
import PersonIcon from "../../assets/img/person.svg?react";
import HeartIcon from "../../assets/img/heart.svg?react";
import CartIcon from "../../assets/img/cart.svg?react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation: React.FC = () => {
  const navItemMap = [
    {
      href: "/dostavka",
      label: "Доставка",
    },
    {
      href: "/oplata",
      label: "Оплата",
    },
    {
      href: "/skidki",
      label: "Скидки",
    },
    {
      href: "/o-kompanii",
      label: "О компании",
    },
    {
      href: "/kontakty",
      label: "Контакты",
    },
  ];

  return (
    <div className="hidden items-center justify-between gap-x-[10px] pt-[20px] md:flex lg:pt-[10px]">
      <nav className="nav w-full lg:w-auto">
        <ul className="nav__list flex justify-between gap-x-3 lg:justify-start xl:gap-x-5">
          {navItemMap.map((item, index) => (
            <li key={index} className="nav__item">
              <NavLink to={item.href} className="link">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const HeaderSticky: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div className="sticky top-0 z-100 container">
      <div className="mt-[10px] rounded-[10px] border border-t-0 bg-white px-[20px] py-[12px] md:mt-0 md:rounded-t-none lg:rounded-b-[20px] lg:px-[30px] lg:py-[20px]">
        <div className="header__middle flex flex-wrap justify-between gap-x-[20px] md:flex-nowrap xl:gap-x-[30px]">
          <div className="flex w-full items-center justify-between gap-[20px] md:w-auto">
            <NavLink to="/" className="logo w-[110px] self-center xl:w-[153px]" end>
              <img alt="Логотип компании Екапак" className="w-full" src={LogoSvg} />
            </NavLink>
            <div className="flex gap-[10px] md:hidden">
              <NavLink to="mailto:info@ekapak.ru" className="iconwrap-mobile">
                <MailIcon className="fill-transparent stroke-dark transition" />
              </NavLink>
              <NavLink to="tel:+79068139777" className="iconwrap-mobile">
                <PhoneIcon className="fill-transparent stroke-dark transition" />
              </NavLink>
              <button className="iconwrap-mobile" aria-label="Открыть меню">
                <div className="aspect-1 relative w-[14px]">
                  <span className="absolute top-0 left-0 h-[2px] w-full rounded bg-dark transition-all"></span>
                  <span className="absolute top-[50%] left-0 h-[2px] w-full -translate-y-[50%] rounded bg-dark transition-all"></span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded bg-dark transition-all"></span>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-[10px] flex w-full flex-0 gap-x-[10px] md:mt-0 md:w-auto md:flex-1">
            <NavLink to="/" className="hidden link lg:flex">
              <div className="group flex h-full items-center justify-center gap-x-[10px] rounded-[10px] bg-background px-5 py-[14px]">
                <div className="relative flex h-[12px] w-[20px] flex-col items-center justify-between">
                  <span className="block h-[2px] w-[20px] rounded-full bg-dark transition-[all] group-hover:w-[10px] group-hover:bg-blue"></span>
                  <span className="block h-[2px] w-[15px] rounded-full bg-dark transition group-hover:bg-blue"></span>
                  <span className="block h-[2px] w-[10px] rounded-full bg-dark transition-[all] group-hover:w-[20px] group-hover:bg-blue"></span>
                </div>
                Каталог
              </div>
            </NavLink>
            <div className="relative w-full">
              <input
                className="h-full input-base !p-[10px] !pl-[36px] md:!py-[14px] md:!pl-[44px]"
                placeholder="Поиск товаров..."
                type="text"
                value={search}
                onChange={handleChange}
              />
              <div className="group cursor-pointer">
                <CircleIcon className="absolute top-[50%] left-[10px] translate-y-[-50%] fill-transparent stroke-gray transition group-hover:stroke-blue md:left-[15px]" />
              </div>
            </div>
          </div>
          <div className="hidden min-w-0 shrink-0 gap-x-[20px] lg:flex xl:gap-x-[30px]">
            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="group iconwrap flex items-center gap-2"
              >
                <PersonIcon className="transition group-hover:fill-blue" />
                <p className="text-[12px] transition-colors group-hover:text-blue lg:text-[14px] xl:text-[16px]">
                  Войти
                </p>
              </button>
            </div>
            <NavLink to="/favorites" className="group iconwrap">
              <HeartIcon className="fill-transparent stroke-dark transition group-hover:stroke-blue" />
              <p className="text-[12px] transition-colors group-hover:text-blue lg:text-[14px] xl:text-[16px]">
                Избранное
              </p>
            </NavLink>
            <NavLink to="/cart" className="group iconwrap">
              <CartIcon className="transition group-hover:fill-blue" />
              <p className="text-[12px] transition-colors group-hover:text-blue lg:text-[14px] xl:text-[16px]">
                Корзина
              </p>
            </NavLink>
          </div>
          <button type="button" className="btn hidden rounded-[10px] btn-blue md:flex">
            Заказать образец
          </button>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default HeaderSticky;
