import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex md:px-28 h-14 p-4 gap-2">
      <div className="flex flex-1 gap-2 mr-5">
        <Image
          src={"/logo.png"}
          width={22}
          height={22}
          alt="Imagem do projeto"
        />
        <text>Portfolio</text>
      </div>
      <nav className="flex-1 hidden md:block">
        <ul className="flex space-x-4">
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="https://github.com/henriquenobre" target="_blank">
              <Image
                src={"/github.png"}
                width={22}
                height={22}
                alt="Ícone github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/henrique-nobre-1736141aa/"
              target="_blank"
            >
              <Image
                src={"/Linkedin.png"}
                width={22}
                height={22}
                alt="Ícone linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
