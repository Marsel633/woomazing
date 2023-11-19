import { Button, Layout } from "../shared";
import ideasImg from "../assets/ideasPng.png";
import magicImg from "../assets/magicPng.png";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate =  useNavigate();
  return (
    <Layout>
      <section className="container mx-auto leading-6 pt-[7%] pb-[10%] section">
        <div className="sectionTitle">
            <h3 className="title">О бренде</h3>
            <p>Главная - О бренде</p>
        </div>
          <div className="flex items-center gap-1/5 mb-24">
            <div className="w-3/6">
              <img src={ideasImg} alt="women" />
            </div>
            <div className="w-3/6">
              <h5 className="leading-9 subtitle">Идея и женщина</h5>
              <p className="my-[3%]">
                Womazing была основана в 2010-ом и стала одной из самых успешных
                компаний нашей страны. Как и многие итальянские фирмы, Womazing
                остаётся семейной компанией, хотя ни один из членов семьи не
                является модельером.
              </p>
              <p className="my-[3%]">
                Мы действуем по успешной формуле, прибегая к услугам известных
                модельеров для создания своих коллекций. Этот метод был описан
                критиком моды Колином Макдауэллом как форма дизайнерского
                со-творчества, характерная для ряда итальянских prêt-a-porter
                компаний.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[10%] mt-24">
            <div className="w-3/6">
              <h5 className="leading-9 subtitle">Магия в деталях</h5>
              <p className="my-[3%]">
                Первый магазин Womazing был открыт в маленьком городке на севере
                страны в 2010-ом году. Первая коллекция состояла из двух пальто
                и костюма, которые были копиями парижских моделей.
              </p>
              <p className="my-[3%]">
                Несмотря на то, что по образованию основательница была
                адвокатом, ее семья всегда была тесно связана с шитьём
                (прабабушка основательницы шила одежду для женщин, а мать
                основала профессиональную школу кроя и шитья). Стремление
                производить одежду для масс несло в себе большие перспективы,
                особенно в то время, когда высокая мода по-прежнему
                доминировала, а рынка качественного prêt-a-porter попросту не
                существовало.
              </p>
            </div>
            <div className="w-3/6">
              <img src={magicImg} alt="women" />
            </div>
          </div>
            <Button onClick={()=> navigate("/shop")}>Перейти в магазин</Button>
      </section>
    </Layout>
  );
};
