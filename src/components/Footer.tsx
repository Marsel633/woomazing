import mainLogo from "../assets/main-logo.svg";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import visaMastercard from "../assets/visa-mastercard.svg";

export const Footer = () => {
  return (
    <footer className="h-[360px] bg-beige">
      <div className="h-full container mx-auto w-full grid grid-cols-4 justify-center items-center">
          <div className="flex flex-col justify-around h-[70%] col-span-1">
            <div className="flex items-center uppercase cursor-pointer gap-[14px]">
              <img src={mainLogo} alt="main logo" />
              womazing
            </div>
            <div className="flex flex-col gap-[5px]">
              <p>© Все права защищены</p>
              <p>Политика конфиденциальности</p>
              <p>Публичная оферта</p>
            </div>
          </div>
          <nav className="flex flex-col items-center gap-10 col-span-2">
            <div className="flex gap-11">
              <Link to="/">Главная</Link>
              <Link to="/shop">Магазин</Link>
              <Link to="/about">О бренде</Link>
              <Link to="/contacts">Контакты</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <Link to="/">Пальто</Link>
              <Link to="/shop">Свитшоты</Link>
              <Link to="/about">Кардиганы</Link>
              <Link to="/contacts">Толстовки</Link>
            </div>
          </nav>
          <div className="flex flex-col gap-6 items-end col-span-1">
            <p>+7 (495) 823-54-12</p>
            <p>hello@womazing.com</p>
            <div className="flex gap-2.5 justify-start">
              <img src={instagram} alt="instagram icon" />
              <img src={facebook} alt="facebook icon" />
              <img src={twitter} alt="twitter icon" />
            </div>
            <div><img className="max-w-full" src={visaMastercard} alt="cards icons" /></div>
          </div>
      </div>
    </footer>
  );
};