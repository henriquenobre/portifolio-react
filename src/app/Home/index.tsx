"use client";
import { Button } from "@/components/Button";
import React from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { projects, projectsDTO } from "@/mocks/projects";
import { ProgressBar } from "@/components/ProgressBar";
import { TecnologiesDTO, tecnologies } from "@/mocks/tecnologies";
import { TimeLine } from "@/components/TimeLine";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="bg-background  text-white">
      <Header />
      <main className="md:p-24">
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-2/3 justify-center items-center sm:items-start">
            <h1 className="text-3xl">Henrique Nobre</h1>
            <div className="p-8">
              <p className="mb-10 text-center sm:text-start">
                Aprendi com meu pai manutenção de computadores, desde então
                trabalhei na área de tecnologia como técnico em informática e já
                trabalhei com suporte de sistema hospitalar e comercial, me
                aventurei um tempo como representante comercial e também montei
                duas empresas em áreas diferentes, essas experiências me
                trouxeram muito conhecimento, mas decidi voltar para área de
                tecnologia que fui o que cresci fazendo, me formei no curso de
                análise e desenvolvimento de sistemas e atualmente trabalho como
                desenvolvedor Front End com React e React Native
              </p>
              <div className="flex justify-center items-center sm:justify-start ">
                <Link legacyBehavior href="/Curriculum Vitae.pdf" download>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button text="Baixar CV" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/3">
            <Image src="/drawing.png" width={758} height={758} alt="" />
          </div>
        </div>
        <div className=" flex flex-col" id="projetos">
          <h1 className="text-3xl text-center sm:text-start">Projetos</h1>
          <div className="flex flex-wrap gap-10 mt-5 p-5">
            {projects.map((item: projectsDTO, index: number) => (
              <Card
                key={index}
                title={item.title}
                srcImage={item.srcImage}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <div className="pb-5 mt-10" id="tecnologias">
          <h1 className="text-3xl text-center sm:text-start">Tecnologias</h1>
          <div className="flex flex-col justify-center items-center sm:justify-start">
            {tecnologies.map((item: TecnologiesDTO, index: number) => (
              <ProgressBar
                key={index}
                title={item.title}
                progress={item.progress}
              />
            ))}
          </div>
          <h1 className="text-3xl text-center sm:text-start mt-10">
            Tecnologias e habilidades adicionais
          </h1>
          <div className="mt-5 flex flex-col items-center justify-center">
            <ul className="max-w-2/4 list-disc flex flex-col sm:flex-row sm:space-x-20">
              <li>Git</li>
              <li>Material UI</li>
              <li>Tailwind</li>
            </ul>
            <ul className="max-w-2/4 list-disc flex flex-col sm:flex-row sm:space-x-20">
              <li>Next.js</li>
              <li>Figma</li>
              <li>Saas</li>
            </ul>
            <ul className="max-w-2/4 list-disc flex flex-col sm:flex-row sm:space-x-20">
              <li>GraphQL</li>
              <li>Material UI</li>
              <li>SQLite</li>
            </ul>
          </div>
        </div>
        <div className="pb-5 mt-10 mb-32" id="sobre">
          <h1 className="text-3xl text-center md:text-start">Linha do Tempo</h1>
          <div className="ml-10 mt-10">
            <TimeLine />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
