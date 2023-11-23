import { useEffect } from "react";
import { Button, Layout, SecondButton } from "../shared";
import deleteIcon from "../assets/deleteIcon.svg";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { cartStore } from "../store";

interface IProductItem {
  id?:number,
  title: string,
  price: number,
  imageURL : any,
  count: number,
}
export const Cart = observer(() => {
  const {cart, total, getCart} = cartStore;
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
    Object.values(cart);
  }, []);

  return (
    <Layout>
      <section className="section container mx-auto">
        <div className="sectionTitle">
          <h3 className="title">Корзина</h3>
          <p>Главная - Корзина</p>
        </div>
        <div className="w-full">
          <div className="w-full grid grid-cols-5 items-center pb-[2%] border-b-0">
            <p className="col-span-2 text-2xl">Товар</p>
            <p className="col-span-1 text-2xl">Цена</p>
            <p className="col-span-1 text-2xl">Количество</p>
            <p className="col-span-1 text-2xl">Всего</p>
          </div>
          <div className="w-full h-full grid grid-cols-5 gap-[1%] items-center pt-[4%] pb-[10%]">
            {Object.values(cart).map((item : IProductItem) => (
              <CartItem
                // key={item.id}
              item={item}
              />
            ))}
          </div>
          <div className="flex justify-between items-end">
            <input className="input h-12 w-64" type="text" placeholder="Введите купон" />
            <Button>Применить купон</Button>
            <SecondButton>Обновить корзину</SecondButton>
          </div>
        </div>
          <div className="flex gap-4 justify-end w-full">
            <div className="w-72 h-16 flex justify-around items-center bg-[#f1eadc] text-2xl font-medium">
              <p>Итого:</p>
              <p>{total} $</p>
            </div>
           <Button onClick={() => navigate("/checkout")}>Оформить заказ</Button>
          </div>
      </section>
    </Layout>
  );
});


const CartItem = ({ ...item }) => {
  // const {deleteProduct} = cartStore;
  const {title, price, count , imageURL} = item;

  const handleDeleteProduct = (id:number) => {
    // (deleteProduct(id));
  };

  const allItemsSum = price * count;

  return (
    <>
      <div className="col-span-2 w-full flex justify-around items-center">
        <button
          // onClick={() => handleDeleteProduct(item.id)}
          className="bg-transparent border-none outline-none"
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <div>
          <img className="max-w-full w-44 h-52" src={imageURL} alt={title} />
        </div>
        <h5>{title}</h5>
      </div>
      <p className="col-span-1">{price} $</p>
      <p className="col-span-1">{count}</p>
      <p className="col-span-1">{allItemsSum} $</p>
    </>
  );
};
