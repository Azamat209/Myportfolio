import Image from "next/image";

export function Header() {
  return (
    <header className="flex h-20 px-20 justify-between items-center text-xl font-bold shadow-md group">
      <a
        href="#"
        className="logo flex items-center text-2xl tracking-wide gap-[2px]"
      >
        <Image src="/logo.png" alt="logo" width={170} height={40} />
      </a>
      <nav>
        <ul className="hidden lg:flex gap-5 font-normal h-[40px] items-center">
          <a href="#">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#contact">Контакты</a>
        </ul>
      </nav>
    </header>
  );
}
