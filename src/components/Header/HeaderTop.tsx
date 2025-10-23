import PointIcon from "../../assets/img/point.svg?react";
import ClockIcon from "../../assets/img/clock.svg?react";
import PhoneIcon from "../../assets/img/phone.svg?react";
import MailIcon from "../../assets/img/mail.svg?react";
import WhatsappIcon from "../../assets/img/whatsapp.svg?react";
import TelegramIcon from "../../assets/img/telegram.svg?react";
import { NavLink } from "react-router-dom";

const HeaderTop: React.FC = () => {
  return (
    <header className="header__top container mt-[20px] hidden md:block">
      <div className="z-20 flex items-center justify-between gap-[20px] rounded-t-[10px] border border-b-0 bg-white px-[20px] pt-[20px] lg:rounded-t-[20px] lg:px-[30px]">
        <div className="header__address hidden items-center gap-x-[30px] md:flex">
          <div className="flex items-center justify-center gap-x-[10px]">
            <PointIcon className="fill-transparent stroke-dark transition" />
            <p className="text-small">г. Екатеринбург, ул. Старых Большевиков, 2А/2</p>
          </div>
          <div className="hd:flex flex items-center justify-center gap-x-[10px]">
            <ClockIcon className="fill-transparent stroke-dark transition" />
            <p className="text-small">Пн-Пт: с 09:00 до 17:00</p>
          </div>
        </div>
        <div className="header__right flex items-center gap-x-[20px] lg:gap-x-[30px]">
          <button className="group hidden xl:block">
            <div className="flex items-center justify-center gap-x-[10px]">
              <PhoneIcon className="fill-blue transition group-hover:fill-blue-active" />
              <span className="text-[14px] text-blue group-hover:text-blue-active">Перезвоните мне</span>
            </div>
          </button>
          <div className="header__socials flex items-center gap-x-[16px]">
            <NavLink to="mailto:info@ekapak.ru" className="group text-small transition hover:text-blue">
              <div className="flex items-center justify-center gap-x-[10px]">
                <MailIcon className="mt-[4px] fill-none stroke-dark transition group-hover:stroke-blue" />
                <span className="hidden xl:block">info@ekapak.ru</span>
              </div>
            </NavLink>
            <NavLink
              to="https://wa.me/+79068136333?text=Здравствуйте! Хочу заказать упаковку"
              className="ml-[4px] link font-bold"
            >
              <WhatsappIcon className="transition hover:rotate-[360deg]" />
            </NavLink>
            <NavLink
              to="https://t.me/+79068139777?&amp;text=Здравствуйте! Хочу заказать упаковку"
              className="link font-bold"
            >
              <TelegramIcon className="transition hover:rotate-[360deg]" />
            </NavLink>
          </div>
          <div className="header__phones flex items-center gap-[10px] lg:gap-[20px]">
            <NavLink to="tel:+79068139777" className="link font-bold whitespace-nowrap">
              +7 (906) 813-97-77
            </NavLink>
            <NavLink to="tel:+79068136333" className="link font-bold whitespace-nowrap">
              +7 (906) 813-63-33
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
