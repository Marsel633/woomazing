import { useEffect, useState } from "react";
import { Layout } from "../shared";
import { ShopItem } from "../components";
import { Link } from "react-router-dom";
import arrowRight from "../assets/arrowRightIcon.svg";
import { observer } from "mobx-react-lite";
import { clothesStore } from "../store";
interface IParams {
  _limit: number;
  _page: number;
}
export const Shop: React.FC = observer(() => {
  const {
    clothes,
    totalCount,
    getClothes,
    getClothesByPagination,
    getClothesByCategory,
  } = clothesStore;
  const [activeButton, setActiveButton] = useState<string>("all");
  const [params, setParams] = useState<IParams>({
    _limit: 3,
    _page: 1,
  });

  const handleClickFilterBtn = (category: string) => {
    if (category === "all") {
      getClothesByPagination(params);
      setActiveButton("all");
    } else {
      getClothesByCategory({ ...params, category });
      setActiveButton(category);
    }
  };

  const pages = totalCount / params._limit;

  useEffect(() => {
    getClothes();
    getClothesByPagination(params);
  }, [params]);

  return (
    <Layout>
      <section className="container mx-auto">
        <div className="sectionTitle">
          <h3 className="title pb-6">Магазин</h3>
          <p>Главная - Магазин</p>
        </div>
        <div className="pt-2/12 pb-1/12 flex gap-2.5">
          <button
            onClick={() => {
              handleClickFilterBtn("all");
            }}
            className={
              activeButton === "all"
                ? "w-48 h-16 border bg-transparent outline-none"
                : "w-48 h-16 outline-none bg-black text-white"
            }
          >
            Все
          </button>
          <button
            onClick={() => {
              handleClickFilterBtn("jacket");
            }}
            className={
              activeButton === "jacket"
                ? "w-48 h-15 border bg-transparent outline-none"
                : "w-48 h-15 outline-none bg-black text-white"
            }
          >
            Пальто
          </button>
          <button
            onClick={() => {
              handleClickFilterBtn("sweatshirt");
            }}
            className={
              activeButton === "sweatshirt"
                ? "w-48 h-15 border bg-transparent outline-none"
                : "w-48 h-15 outline-none bg-black text-white"
            }
          >
            Свитшоты
          </button>
          <button
            onClick={() => {
              handleClickFilterBtn("cardigan");
            }}
            className={
              activeButton === "cardigan"
                ? "w-48 h-15 border bg-transparent outline-none"
                : "w-48 h-15 outline-none bg-black text-white"
            }
          >
            Кардиганы
          </button>
          <button
            onClick={() => {
              handleClickFilterBtn("t-shirt");
            }}
            className={
              activeButton === "t-shirt"
                ? "w-48 h-15 border bg-transparent outline-none"
                : "w-48 h-15 outline-none bg-black text-white"
            }
          >
            Толстовки
          </button>
        </div>
        <p className="mt-16">
          Показано {params._limit} из {totalCount}
        </p>
        <div className="grid grid-cols-3 pt-[5%] gap-8">
          {clothes.data.map(({ id, title, imageURL, price, sale }) => (
            <ShopItem
              key={id}
              title={title}
              imageURL={imageURL}
              price={price}
              sale={sale}
            />
          ))}
        </div>
        <div className="flex justify-center items-center flex-col">
          <p>
            Показано {params._limit} из {totalCount}
          </p>
          <div className="flex gap-3.5 py-8">
            {Array.from({ length: pages }).map((item, index) => (
              <button
                className={`w-10 h-10 border outline-none bg-transparent  ${
                  index + 1 === params._page ? "bg-black text-white" : "text-black"
                }`}
                onClick={() => setParams({ ...params, _page: index + 1 })}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="w-10 h-10 border outline-none bg-transparent text-black rounded-none flex justify-center items-center"
              onClick={() => {
                if (params._page < pages) {
                  setParams({ ...params, _page: params._page + 1 });
                }
              }}
            >
              <img src={arrowRight} alt="arrow right icon" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
});
