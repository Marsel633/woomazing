import axios from "axios";
import { makeAutoObservable } from "mobx";

interface IClothes  {
  isPending:boolean,
  error:null | Error,
  data: [],
}

type Params = {
  _limit: number,
  _page: number,
  category?: string
}

class ClothesStore {
  clothes:IClothes = { isPending: false, error: null as null | Error, data: [] };
  totalCount:number = 0;

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
      this.totalCount = response.data.length;
    } catch (error) {
      this.clothes.error = new Error();
    } finally {
      this.clothes.isPending = false;
    }
  };

  getClothesByPagination = async(params:Params) => {
    try {
      this.clothes.isPending = true;
      const response = await axios.get(`${process.env.REACT_APP_MAIN_URL}/clothes`, {params});
      this.clothes.data = response.data;
    } catch (error) {
      this.clothes.error = new Error()
    } finally {
      this.clothes.isPending = false;
    }
  }

  getClothesByCategory = async(params:Params) => {
    try {
      this.clothes.isPending = true;
      const response = await axios.get(`${process.env.REACT_APP_MAIN_URL}/clothes`, {params});
      this.clothes.data = response.data;
    } catch (error) {
      this.clothes.error = new Error()
    } finally {
      this.clothes.isPending = false;
    }
  }
}

export const clothesStore = new ClothesStore();


