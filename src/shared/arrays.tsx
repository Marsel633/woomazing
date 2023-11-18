import quality from "../assets/quality.svg";
import speed from "../assets/speed.svg";
import responsibility from "../assets/responsibility.svg";

interface IImportantForUsCard {
  icon: any;
  title: string;
  desc: string;
  [key:string]:any;
}

export const importantForUsArray: IImportantForUsCard[] = [
  {
    icon: quality,
    title: "Качество",
    desc: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
  },
  {
    icon: speed,
    title: "Скорость",
    desc: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
  },
  {
    icon: responsibility,
    title: "Ответственность",
    desc: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
  },
];
