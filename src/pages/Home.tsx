import arrowDownSvg from "../assets/arrow-down.svg";
import mainImage from "../assets/homeMainImage.png";
import secondImage from "../assets/homeSecondImage.png";
import thirdImage from "../assets/homeThirdImage.png";
import dreamteamImage from "../assets/dreamteam.jpg";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { Button, Layout, SecondButton, importantForUsArray } from "../shared";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { clothesStore } from "../store";
import { useEffect } from "react";
import { ShopItem } from "../components";

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    opacity: 1;
    width: 15px;
    background: #000000;
  }
  > .slick-dots li.slick-active button {
    background: #999999;
  }
  > .slick-track {
    height: auto;
  }
`;

export const Home: React.FC = observer(() => {
  const { getClothes, clothes } = clothesStore;

  useEffect(() => {
    getClothes();
  }, []);

  if (clothes.isPending) {
    return (
      <h1 className="w-screen h-screen bg-darkGreen grid items-center">
        ...Loading
      </h1>
    );
  }

  return (
    <Layout>
      <section className="max-w-full flex justify-center items-center mb-24">
        <CarouselWrapper
          dotPosition="bottom"
          style={{ width: 850, height: 600, paddingLeft: "25%" }}
        >
          <div className="flex justify-center items-center h-full">
            <h2 className="title">
              Новые поступления <br /> в этом сезоне
            </h2>
            <p className="text-xl w-[56%] text-right py-11">
              Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
              этом сезоне. Время исследовать.
            </p>
            <div className="flex">
              <div className="w-16 h-16 flex justify-center items-center bg-[#6e9c9f1a]">
                <img src={arrowDownSvg} alt="arrow down icon" />
              </div>
              <Button>Открыть магазин</Button>
            </div>
          </div>
          <div>Something Here</div>
          <div>Something Here</div>
        </CarouselWrapper>
        <div className="pt-28 pb-12 w-2/5 h-[826px] bg-beige relative top-0">
          <div className="w-[410px] h-[650px] absolute ">
            <img src={mainImage} alt="main img" />
          </div>
          <div className="w-52 h-52 relative top-32 left-[310px] ">
            <img src={secondImage} alt="second img" />
          </div>
          <div className="w-48 h-80 relative top-44 left-[-130px]">
            <img src={thirdImage} alt="third img" />
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-24">
        <h3 className="subtitle">Новая коллекция</h3>
        <div className="grid grid-cols-3 gap-7 pb-[8%]">
          {clothes.data.slice(0,3).map(({ id, title, imageURL, price, sale }) => (
            <ShopItem
              key={id}
              title={title}
              imageURL={imageURL}
              price={price}
              sale={sale}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <SecondButton>Открыть магазин</SecondButton>
        </div>
      </section>
      <section className="container mx-auto">
        <h3 className="subtitle">Что для нас важно</h3>
        <div className="flex items-center gap-[5%]">
          {importantForUsArray.map((item) => (
            <div className="flex flex-col gap-5">
              <div key={item.title}>
                <img className="h-16" src={item.icon} alt="" />
              </div>
              <h5 className="text-3xl">{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto pb-[10%]">
        <h3 className="subtitle">
          Команда мечты Womazing
        </h3>
        <div className="flex flex-col relative">
          <CarouselWrapper
            className="w-[70%] h-[500px] absolute left-0"
            dotPosition="top"
          >
            <div>
              <img src={dreamteamImage} alt="" />
            </div>
            <div>
              <img src={mainImage} alt="" />
            </div>
            <div>
              <img src={secondImage} alt="" />
            </div>
          </CarouselWrapper>
          <div className="flex flex-col w-[30%] h-full justify-center gap-7 absolute right-0">
            <h5 className="font-medium text-2xl">Для каждой</h5>
            <p>
              Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
            </p>
            <p>
              Womazing ищет эти мелочи и создает прекрасные вещи, которые
              выгодно подчеркивают достоинства каждой девушки.
            </p>
            <Link className="text-darkGreen" to="/about">
              Подробнее о бренде
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
});
