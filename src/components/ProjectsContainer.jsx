export const ProjectsContainer = () => {
  return (
    <section className="flex flex-col">
      <h2 className="flex justify-start items-center text-gray-300 text-4xl mb-5 gap-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
        Projetos
      </h2>
      <p className="text-gray-300 mb-4 leading-6">
        veja abaixo meu projetos publicados no github.
      </p>
      <a
        href="https://github.com/kevenklynsman"
        className="py-3 px-4 text-gray-300 text-none rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 self-start"
        target="_blank"
        rel="noreferrer"
      >
        ver Projetos
      </a>
    </section>
  );
};
