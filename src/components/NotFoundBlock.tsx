import { NavLink } from "react-router-dom";

const NotFoundBlock: React.FC = () => {
  return (
    <div className="container">
      <div className="section flex items-center justify-center">
        <div className="wrap flex max-w-[875px] flex-col items-center px-[20px] py-[40px] lg:px-[40px]">
          <p className="hd:text-[300px] mb-[20px] text-center text-[100px] leading-[100%] font-extrabold text-blue-active shadow404 lg:mb-[30px] lg:text-[200px]">
            404
          </p>
          <p className="mb-[20px] text-center title-main lg:mb-[30px]">Страница не найдена</p>
          <p className="mb-[40px] text-center text-default lg:mb-[50px]">
            Запрашиваемой страницы не&nbsp;существует. Возможно она была удалена или в&nbsp;запросе был указан неверный
            адрес. Попробуйте начать с&nbsp;главной страницы.
          </p>
          <NavLink to="/" className="btn rounded-[10px] btn-blue">
            Перейти на главную
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;
