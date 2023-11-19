import { Link, useNavigate } from "react-router-dom";
import bagLogo from "../assets/bag-logo.svg"
import mainLogo from "../assets/main-logo.svg"
import phoneLogo from "../assets/phone-logo.svg"

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-24 z-20 sticky top-0 bg-white">
      <div className="h-full w-full flex justify-around items-center container mx-auto">
        <div className="flex justify-center items-center uppercase w-36 h-6 cursor-pointer gap-3.5">
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
          <img className="w-6 h-6" src={phoneLogo}alt="phone logo" />
          <span>+7 (495) 823-54-12</span>
        </div>
          <button onClick={() => navigate("/cart")} className="w-7 h-7 bg-transparent rounded-none relative">
            <img src={bagLogo} alt="bag logo" />
            <span className="block text-[10px] absolute top-[-10px] right-[-10px] w-4 h-4 bg-beige rounded-full">10</span>
          </button>
          <button className="rounded-none border border-darkGreen text-darkGreen px-6 py-2 hover:bg-darkGreen hover:text-white transition-all duration-300">Регистрация</button>
      </div>
    </header>
  );
};

