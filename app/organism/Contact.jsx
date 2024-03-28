"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from "../components/Loader";

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    const form = e.target;

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

    if (form.message.value == "" && form.email.value == "") {
      console.log("yeyyy");
      setErrorMessage("Please enter data");
      setIsLoading(false);
      return;
    }
    try {
      emailjs.sendForm(serviceId, templateId, form, privateKey).then(
        () => {
          alert("Message sent successfully!");
          form.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
    } catch (err) {
      console.log(err);
      alert("An unexpected error occurred, please try again.");
      setIsLoading(false);
    }
  };
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center 
		py-20 gap-20 p-0 lg:px-20"
    >
      {isLoading && <Loader />}

      <div className="flex flex-col gap-5 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-start">
        <h5 className="font-semibold text-3xl">Свяжись со мной</h5>
        <p className="w-full lg:w-3/4 text-lg text-secondary">
          Открыт для обсуждения новых проектов, творческих идей или возможности
          воплотить ваше видение в жизнь. Если вы заинтересованы в
          сотрудничестве или просто хотите поздороваться, не стесняйтесь
          связаться со мной через форму ниже или напрямую. Давайте воплотим
          что-то поистине удивительное вместе!
        </p>
      </div>
      <form
        className="bg-secondary flex flex-col gap-5 px-5 py-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h5 className="font-medium text-xl pl-2">Связаться</h5>
        <div>
          <p className="text-red-500">{errorMessage}</p>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div>
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <textarea
            className="w-full h-20 p-2 rounded-lg outline-none"
            type="text"
            name="message"
            placeholder="Сообщение"
          />
        </div>
        <button
          className="bg-violet text-white rounded-lg w-40 h-10"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default Contact;
