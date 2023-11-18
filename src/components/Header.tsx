import bagLogo from "../assets/bag-logo.svg"
import mainLogo from "../assets/main-logo.svg"
import phoneLogo from "../assets/phone-logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { FC, useEffect, useMemo } from "react";
import { RxAvatar } from "react-icons/rx";
import { Dropdown } from "antd";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-[100px] z-10 sticky t-0 bg-white">
      <div className="h-full w-full flex justify-around items-center container mx-auto">
        <div className="flex justify-center items-center uppercase w-[140px] h-[25px] cursor-pointer gap-[14px]">
        <img src={mainLogo} alt="main logo" />
          womazing
        </div>
        <nav className="w-2/5 flex justify-around">
          <Link to="/">Главная</Link>
          <Link to="/shop">Магазин</Link>
          <Link to="/about">О бренде</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <div className="flex items-center cursor-pointer">
          <img className="w-[24px] h-[24px]" src={phoneLogo}alt="phone logo" />
          <span>+7 (495) 823-54-12</span>
        </div>
          <button onClick={() => navigate("/cart")} className="w-[27px] h-[27px] bg-transparent rounded-none relative">
            <img src={bagLogo} alt="bag logo" />
            <span className="block text-[10px] absolute top-[-10px] right-[-10px] w-4 h-4 bg-[#998E78] rounded-full">10</span>
          </button>
          <button>Регистрация</button>
      </div>
    </header>
  );
};

