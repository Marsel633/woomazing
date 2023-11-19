import { Button, Layout } from "../shared";
import { SubmitHandler, UseFormHandleSubmit, useForm } from "react-hook-form";

export const Contacts = () => {
  type Values = {
    firstname:string,
    email: string,
    phone: string,
    message: string,
  }
  const { register, handleSubmit, reset } = useForm<Values>();
  const onSubmit : SubmitHandler<Values> = (values) => {
    console.log(values);
    reset();
  };

  return (
    <Layout>
      <section className="section container mx-auto">
        <div className="sectionTitle">
          <h3 className="title">Контакты</h3>
          <p>Главная - Контакты</p>
        </div>
        <div className="w-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8342.657079105567!2d37.59463777240512!3d55.739832692795304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54baee600eabb%3A0xde670a082113a086!2z0JHQsNCz0YDQsNGC0LjQvtC9!5e0!3m2!1sru!2skg!4v1700387553275!5m2!1sru!2skg"
            width="100%"
            height="650"
            style={{border: 0}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-4/5 flex justify-between items-start">
          <div className="flex flex-col gap-5">
            <p>Телефон</p>
            <p>+7 (495) 823-54-12</p>
          </div>
          <div className="flex flex-col gap-5">
            <p>E-mail</p>
            <p>info@sitename.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <p>Адрес</p>
            <p>г. Москва, 3-я улица Строителей, 25</p>
          </div>
        </div>
        <div className="h-full">
          <h5 className="subtitle">Напишите нам</h5>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[443px] h-[566px] flex flex-col py-16"
          >
            <input
              className="input h-10 mb-10 w-full"
              type="text"
              {...register("firstname", { required: true })}
              placeholder="Имя"
            />
            <input
              className="input h-10 mb-10 w-full"
              type="email"
              {...register("email", { required: true })}
              placeholder="E-mail"
            />
            <input
              className="input h-10 mb-10 w-full"
              type="text"
              {...register("phone", { required: true })}
              placeholder="Телефон"
            />
            <textarea
              className="h-36 mb-10 rounded-none outline-none text-base font-normal border-b resize-none"
              {...register("message", { required: true })}
              placeholder="Сообщение"
            ></textarea>
            <Button type="submit">Отправить</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};
