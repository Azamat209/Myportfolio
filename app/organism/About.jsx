import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="p-5 lg:px-20 pb-20 lg:justify-center lg:p-20"
      >
        <MaxWidthWrapper className="pt-10">
          <div className="flex flex-col-reverse  gap-15 lg:flex lg:flex-row items-center gap-10 ">
            <Image
              src="/about.webp"
              className="rounded-xl"
              width={400}
              height={400}
              alt="heroBg"
            />
            <div className="flex flex-col gap-5 lg:items-start items-center text-center lg:text-start	">
              <h1 className="text-3xl font-semibold mt-10 lg:mt-0">
                Фронтенд-разработчик из г. Тараза, Казахстан📍
              </h1>
              <p className="text-xl w-full text-secondary">
                Привет, меня зовут Азамат, я фронтенд-разработчик. Моя страсть —
                создавать и разрабатывать чистый UI/UX для моих пользователей.
              </p>
              <p className="text-secondary">
                Мой основной стек в настоящее время — ReactJs{" "}
                <a className="text-black-400 " href="https://react.dev/">
                  ReactJs
                </a>{" "}
                в сочетании с{" "}
                <a className="text-green-400 " href="https://tailwindcss.com/">
                  Tailwindcss
                </a>
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
