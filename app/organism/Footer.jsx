import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="flex h-20 px-20 bg-black justify-between items-center text-white text-xl font-bold shadow-md group"
    >
      <h2 className="logo">Azamat</h2>
      <nav>
        <ul className="hidden md:flex gap-5 text-white">
          <a href="https://github.com/Azamat209">
            <Github />
          </a>
          <a href="">
            <Mail />
          </a>
        </ul>
      </nav>
    </footer>
  );
}
