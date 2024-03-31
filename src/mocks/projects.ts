export interface projectsDTO {
  srcImage: string;
  title: string;
  description: string;
  link?: string;
}

export const projects: projectsDTO[] = [
  {
    srcImage: "/gestor.png",
    title: "Gestor APP",
    description:
      "Aplicativo de gestão de condomínio desenvolvido em React Native, faz leitura das contas de água e luz nos registros para calcular os gastos de cada unidade.",
    link: "https://github.com/henriquenobre/gestor-react-native",
  },
  {
    srcImage: "/resolvaFacil.png",
    title: "Resolva Fácil",
    description:
      "Foram desenvolvidas funcionalidades para que o inquilino tenha acesso aos serviços Lello,  como por exemplo, reservar área, emissão de segunda via boleto de pagamento, alteração de titularidade, cadastro e atualização de inquilino e proprietário, optar por receber correspondências, como boleto e notificações, por e-mail.",
    link: "https://www.lellocondominios.com.br/resolva-facil/",
  },
  {
    srcImage: "/portalSindico.png",
    title: "Portal do Síndico",
    description:
      "Um portal para que os síndicos da lello tenha acesso a diversas soluções para facilitar o seu dia a dia.",
    link: "https://clientes.lellocondominios.com.br/",
  },
  {
    srcImage: "/api-recipe.jpg",
    title: "API Recype",
    description:
      "Api para servir ao meu projeto mobile com um CRUD de receitas, usando node, express.js, mySQL e docker.",
    link: "https://github.com/henriquenobre/api-recypes",
  },
  {
    srcImage: "/productPage.png",
    title: "Aulas de Yoga",
    description: "Landing Page para vendas de aulas de yoga",
    link: "https://henriquenobre.github.io/produto-yoga/",
  },
  {
    srcImage: "/lotoBrain.png",
    title: "Loto Brain",
    description:
      "Uma aplicação web front-end que mostre os Resultados das Loterias.",
    link: "https://loto-brainn-lazaro1.vercel.app/",
  },
  {
    srcImage: "/randomQuote.png",
    title: "Frases aleatórias",
    description: "Aplicação react com geração de frases",
    link: "https://henriquenobre.github.io/radon-quote-machine/",
  },
  {
    srcImage: "/todoReact.png",
    title: "Todo List",
    description: "Aplicação de tarefas em react",
    link: "https://henriquenobre.github.io/Tarefas/",
  },
  {
    srcImage: "/devForm.png",
    title: "Formulário Dev",
    description:
      "Formulário desenvolvido com HTML e CSS para o projeto do FreeCodeCamp.",
    link: "https://henriquenobre.github.io/formulario/",
  },
  {
    srcImage: "/documantationPage.png",
    title: "Página de documentação",
    description: "Pagina de documentação técnica desenvolvida com HTML e CSS",
    link: "https://henriquenobre.github.io/Techinical-documentation-page/#Reference",
  },
];
