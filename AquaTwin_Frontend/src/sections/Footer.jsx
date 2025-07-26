import { useEffect } from "react";
import { icons } from "../constants/images";

const socials = [
  { src: icons.facebook, href: "" },
  { src: icons.instagram, href: "" },
  { src: icons.youtube, href: "" },
  { src: icons.github, href: "" },
  { src: icons.linkedin, href: "" },
  { src: icons.twitter, href: "" },
  { src: icons.medium, href: "" },
];

const useDynamicText = (id) => {
  useEffect(() => {
    const textElement = document.getElementById(id);

    const handleMouseMove = (e) => {
      const { offsetX, target } = e;
      const width = target.offsetWidth;

      const percentage = (offsetX / width) * 100;
      textElement.style.background = `linear-gradient(to right,rgb(26, 70, 105) ${percentage}%,rgb(75, 148, 155)${percentage}%)`;
      textElement.style.backgroundClip = "text";
      textElement.style.color = "transparent";
    };

    const handleMouseLeave = () => {
      textElement.style.background = "none";
      textElement.style.backgroundClip = "unset";
      textElement.style.color = "rgb(75, 148, 155)";
    };

    textElement.addEventListener("mousemove", handleMouseMove);
    textElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textElement.removeEventListener("mousemove", handleMouseMove);
      textElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [id]);
};

export const Footer = () => {
  useDynamicText("firefox");
  return (
    <div
      className="relative w-full h-full"
      style={{
        background:
          'radial-gradient(circle, #d3eafd 0%,rgb(140, 210, 245) 40%, #e7e9f3 100%)',
      }}
    >
      <div className="flex justify-center space-x-2 py-4 absolute -top-2 max-lg:-top-8 max-sm:-top-10 left-0 right-0 mt-2">
        {socials.map((social, index) => (
          <a href={social.href} target="_blank" className="h-fit" key={index}>
            <img
              src={social.src}
              className="md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1 active:scale-100"
            />
          </a>
        ))}
      </div>
      <br></br>
      <div
        className="text-center text-[17vw] p-0 m-0 leading-none font-apex text-rgb(29, 182, 202)"
        id="firefox"
      >
        AQUATWIN
      </div>
    </div>
  );
};

export default Footer;