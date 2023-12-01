import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, className: "bg-cyan-600" },
  { name: "Github", icon: <FaGithub />, className: "bg-slate-900" },
  { name: "Instagram", icon: <FaInstagram />, className: "bg-pink-500" },
];
export const SocialNetworks = () => {
  return (
    <>
      <section className="flex justify-center items-center gap-4 my-4 mx-0">
        {socialNetworks.map((network) => (
          <a
            href=""
            id={network.class}
            key={network.name}
            className="p-2 bg-blue-300 rounded-lg  hover:bg-gradient-to-r from-cyan-500 to-blue-500 "
          >
            {network.icon}
          </a>
        ))}
      </section>
    </>
  );
};
