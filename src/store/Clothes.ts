import { message } from "antd";
import axios from "axios";
import { makeAutoObservable } from "mobx";

class ClothesStore {
  clothes = { isPending: false, error: null as null | Error, data: [] };

  constructor() {
    makeAutoObservable(this);
  }

  getClothes = async () => {
    try {
      this.clothes.isPending = true;
      const response = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/clothes`
      );
      this.clothes.data = response.data;
    } catch (error) {
      this.clothes.error = new Error(`${message}`);
      console.log(this.clothes.error)
    } finally {
      this.clothes.isPending = false;
    }
  };
}

export const clothesStore = new ClothesStore();
