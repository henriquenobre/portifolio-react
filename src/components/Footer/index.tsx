import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-28 py-12 gap-2 items-center">
      <div className="flex flex-col flex-1 gap-2 mr-5 items-center">
        <text className="text-sm font-extrabold">Contato: </text>
        <text className="text-sm">(38) 99970-4163</text>
      </div>
      <div className="flex flex-col flex-1 gap-2 mr-5 items-center">
        <text className="text-sm">Email: </text>
        <text className="text-sm">Henriquenobr@gmail.com</text>
      </div>
      <div className="flex md:block">
        <ul className="flex items-center justify-center gap-3 md:space-x-4">
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
