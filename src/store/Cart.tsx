import axios from "axios";
import { makeAutoObservable } from "mobx";

interface ICart {
  isPending: boolean;
  error: null | Error;
  data: [];
}

class CartStore {
  cart: ICart = {
    isPending: false,
    error: null,
    data: [],
  };
  total : number = 0

  constructor() {
    makeAutoObservable(this);
  }

  getCart = async() => {
    try {
        this.cart.isPending = true;
        const response = await axios.get(`${process.env.REACT_APP_MAIN_URL}/cart`);
        this.cart.data = response.data
    } catch (error) {
        this.cart.error = new Error()
    } finally {
        this.cart.isPending = false
    }
  }

  addToCart = async(item:any) => {
    try {
        this.cart.isPending = true;
        const response = await axios.post(`${process.env.REACT_APP_MAIN_URL}/cart`,{item})
        this.cart.data = response.data;
    } catch (error) {
        this.cart.error = new Error()
    } finally {
        this.cart.isPending = false
    }
  }

//   deleteProduct = async(id:number) => {
//     try {
//         this.cart.isPending = true;
//         const response = await axios.delete(`${process.env.REACT_APP_MAIN_URL}/cart`,{id})
//         this.cart.data = response.data;
//     } catch (error) {
//         this.cart.error = new Error
//     } finally {
//         this.cart.isPending = false
//     }
//   }
}

export const cartStore = new CartStore();
