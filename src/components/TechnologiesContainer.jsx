import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

const technologies = [
  {
    id: "html",
    name: "Html",
    icon: <DiHtml5 />,
    info: "HTML é a linguagem de marcação padrão para páginas da web. Use-o para estruturar o conteúdo do seu próprio site.",
  },
  {
    id: "css",
    name: "Css",
    icon: <DiCss3 />,
    info: "CSS é a linguagem usada para estilizar um documento HTML e descreve como os elementos devem ser exibidos.",
  },
  {
    id: "js",
    name: "Javascript",
    icon: <DiJsBadge />,
    info: "JavaScript é uma linguagem de programação que pode ser usada para dinamizar o conteúdo, controlar multimídia e movimentar elementos.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    info: "Node.js é um ambiente de servidor de código aberto usado para construir aplicativos de rede escalonáveis. Node.js permite executar JavaScript no servidor.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    info: "React é uma biblioteca JavaScript muito eficiente e flexível para construção de interfaces de usuário.",
  },
];

export const TechnologiesContainer = () => {
  return (
    <>
      <section className="flex flex-wrap md:flex-col mb-4">
        <h2 className="flex justify-start items-center text-gray-300 text-4xl mb-5 gap-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          Technologies
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-6">
          {technologies.map((tech) => {
            return (
              <div
                className="flex justify-center items-center gap-4 border-b-[1px] border-gray-600 w-full md:w-[45%] rounded-sm"
                key={tech.id}
              >
                <span className="text-6xl">{tech.icon}</span>
                <div>
                  <h3 className="text-gray-300 mb-4">{tech.name}</h3>
                  <p className="text-gray-300 mb-4 leading-6 ">{tech.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
