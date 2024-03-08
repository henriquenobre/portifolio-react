import Image from "next/image";
import React from "react";
import { Button } from "../Button";
import { projectsDTO } from "@/mocks/projects";

export const Card = ({ title, srcImage, description, link }: projectsDTO) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="p-6 rounded-tl-lg rounded-br-lg shadow-lg shadow-white border border-gray-100"
      style={{ width: "400px" }}
    >
      <Image src={srcImage} width={500} height={500} alt="Imagem do projeto" />
      <div className="flex flex-col items-center justify-center w-full mt-5">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="w-52 h-1 bg-gradient-to-r from-purple via-indigo to-teal"></div>
      </div>
      <p className="mb-5 mt-5">{description}</p>
      {link ? <Button onClick={handleClick} text="Ver Mais" /> : ""}
    </div>
  );
};
