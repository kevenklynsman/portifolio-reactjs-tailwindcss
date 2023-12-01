import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const informationContainer = [
  {
    title: "Telefone",
    icon: <AiFillPhone id="phone-icon" />,
    info: "(91)998324729",
  },
  {
    title: "E-mail",
    icon: <AiOutlineMail id="email-icon" />,
    info: "kevenklynsman2003@gmail.com",
  },
  {
    title: "Localização",
    icon: <AiFillEnvironment id="pin-icon" />,
    info: "Belém/PA",
  },
];

export function InformationContainer() {
  return (
    <section className="flex justify-center items-center flex-col flex-wrap bg-blue-500 p-4 mb-8 text-left md:w-[80%] rounded-lg">
      {informationContainer.map((informatoin) => {
        return (
          <div
            className="flex justify-start items-center gap-2 pb-4 mb-3 border-b-[1px] border-gray-400 w-full"
            key={informatoin.title}
          >
            <span className="bg-blue-600 p-2 w-8 h-8 rounded-lg">
              {informatoin.icon}
            </span>
            <div>
              <h3 className="text-gray-400 text-lg mb-2">
                {informatoin.title}
              </h3>
              <p className="text-gray-300 font-bold text-xs">
                {informatoin.info}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
