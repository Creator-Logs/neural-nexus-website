import Nav from "../../components/ui/navbar/navbar";
import Image from "next/image";
import Instagram from "../../assets/Icons/Instagram.svg";
import LinkedIn from "../../assets/Icons/LinkedIn.svg";
import GitHub from "../../assets/Icons/GitHub.svg";
import Kaggle from "../../assets/Icons/Kaggle.svg";
import Scroll from "../../assets/Icons/Scroll.svg";

export default function Hero() {
  return (
    <>
      <section className="z-40 relative flex w-screen h-screen bg-black-gradient items-center justify-center">
        <div className="absolute -right-20 top-1/4 dark:bg-purple rounded-full border w-48 h-64 opacity-75 bg-blur"></div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="bg-clip-text text-transparent bg-gradient-to-r from-teal to-blue text-xl text-center tracking-tighter inline-block">
            Welcome to Neural Nexus
          </h5>
          <h1 className="text-white text-5xl text-center tracking-tighter leading-none font-semibold">
            A Repository Of Deep Learning Models
          </h1>
          <h6 className="pt-10 text-blue-gray text-lg text-center font-extralight leading-none">
            By Ansh Gupta
          </h6>
          <a
            href="#featured-models"
            className="mt-20 flex flex-col items-center justify-center hover:brightness-150"
          >
            <Image
              src={Scroll}
              width={20}
              height={20}
              alt="Scroll"
              className="flex-shrink-0"
            />
            <p className="text-gray font-extralight">Scroll</p>
          </a>
        </div>
        <div className="absolute flex items-center justify-center flex-col top-2/3 left-10 space-y-4">
          <a
            href="https://www.instagram.com/creatorlogs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Instagram}
              width={27}
              height={27}
              alt="Instagram"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-gupta-542613255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedIn}
              width={27}
              height={27}
              alt="LinkedIn"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
          <a
            href="https://www.kaggle.com/anshkami"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Kaggle}
              width={27}
              height={27}
              alt="Kaggle"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
          <a
            href="https://github.com/Creator-Logs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GitHub}
              width={27}
              height={27}
              alt="GitHub"
              className="flex-shrink-0 hover:brightness-150"
            />
          </a>
        </div>
      </section>
    </>
  );
}
