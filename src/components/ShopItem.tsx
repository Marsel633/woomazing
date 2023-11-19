import { FC } from "react";
import arrowRight from "../assets/arrow-right.svg";

export const getSalePrice = (price: number, sale: number) => {
  if (sale) {
    const result = (price * sale) / 100;
    return (
      <p>
        <span className="price">{price} $</span>{" "}
        <span className="salePrice">{price - Math.floor(result)} $</span>
      </p>
    );
  }
  return price;
};

interface IShopItemProps {
  id?: number;
  title: string;
  imageURL: any;
  price: number;
  sale: number;
}

export const ShopItem: FC<IShopItemProps> = ({
  title,
  imageURL,
  price,
  sale,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative">
        <img src={imageURL} alt={title} />
        <div className="absolute w-full h-full top-0 left-0 bg-[#6e9c9f00] transition-all duration-300 hover:bg-[#6e9c9fa3]">
          <img
            className="w-12 h-12 absolute top-[45%] left-[40%] transition-all duration-500 opacity-0"
            src={arrowRight}
            alt="arrow right"
          />
        </div>
      </div>
      <h5 className="my-[5%] text-2xl">{title}</h5>
      <p>{getSalePrice(price, sale)}</p>
    </div>
  );
};
