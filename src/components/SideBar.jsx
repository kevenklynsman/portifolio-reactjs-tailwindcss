import { SocialNetworks } from "./SocialNetworks";
import { InformationContainer } from "./InformationContainer";

import Avatar from "../img/foto_de_perfil.png";

export const SideBar = () => {
  const alertClick = () => alert("Solicite o Currículo pelo email a cima");

  return (
    <>
      <aside className="bg-blue-600 md:flex-1 m-auto md:m-0 md:p-10 mb-5 p-5 rounded-xl flex items-center flex-col text-center relative ">
        <img
          src={Avatar}
          alt="Keven klynsman"
          className="max-w-card rounded-xl absolute -top-10"
        />
        <p className="text-gray-300 bg-blue-500 rounded-md mt-48 py-3 px-4">
          Desenvolvedor web
        </p>
        <SocialNetworks />
        <InformationContainer />
        <a
          href="#"
          onClick={alertClick}
          className="py-3 px-4 text-gray-300 text-none rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Download do currículo
        </a>
      </aside>
    </>
  );
};
