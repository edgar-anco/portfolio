import { useTranslations } from "next-intl";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { linkSync } from "fs";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  const t = useTranslations("Projects");

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {t("h1")}
        <span className="text-purple">{t("span")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
          <PinContainer
            title={t("title1")}
            href="https://sicore-rodas.web.app/#/"
          >
            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                <img src="/bg.png" alt="bg-img" />
              </div>
              <img
                src="/sicore.png"
                alt={t("title1")}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {t("title1")}
            </h1>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
              {t("des1")}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 1 + 2}px)`, //index 1
                  }}
                >
                  <img src="/vue.png" alt="Vue" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 2 + 2}px)`, //index 2
                  }}
                >
                  <img src="/html.png" alt="HTML" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 3 + 2}px)`, //index 3
                  }}
                >
                  <img src="/css.svg" alt="HTML" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 4 + 2}px)`, //index 4
                  }}
                >
                  <img src="/ts.svg" alt="Typescript" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 5 + 2}px)`, //index 5
                  }}
                >
                  <img src="/flutter.png" alt="Flutter" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 6 + 2}px)`, //index 6
                  }}
                >
                  <img src="/dart.png" alt="Dart" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 7 + 2}px)`, //index 7
                  }}
                >
                  <img src="/net.png" alt=".NET" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 8 + 2}px)`, //index 8
                  }}
                >
                  <img src="/cSharp.png" alt="C#" className="p-2" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  {t("liveSite")}
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
          <PinContainer
            title={t("title2")}
            href="https://leon-rojo-peru.web.app"
          >
            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                <img src="/bg.png" alt="bg-img" />
              </div>
              <img
                src="/leonRojo.png"
                alt={t("title2")}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {t("title2")}
            </h1>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
              {t("des2")}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 1 + 2}px)`, //index 1
                  }}
                >
                  <img src="/re.svg" alt="React" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 2 + 2}px)`, //index 2
                  }}
                >
                  <img src="/html.png" alt="HTML" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 3 + 2}px)`, //index 3
                  }}
                >
                  <img
                    src="/tailwindCSS.png"
                    alt="Tailwind CSS"
                    className="p-2"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 4 + 2}px)`, //index 4
                  }}
                >
                  <img src="/css.svg" alt="CSS" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 5 + 2}px)`, //index 5
                  }}
                >
                  <img
                    src="/javascript.webp"
                    alt="Javascript"
                    className="p-2"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  {t("liveSite")}
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
          <PinContainer
            title={t("title3")}
            href="https://cardioscan-ai.web.app/"
          >
            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                <img src="/bg.png" alt="bg-img" />
              </div>
              <img
                src="/cardioScanAI.png"
                alt={t("title3")}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {t("title3")}
            </h1>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
              {t("des3")}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 1 + 2}px)`, //index 1
                  }}
                >
                  <img src="/vue.png" alt="Vue" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 2 + 2}px)`, //index 2
                  }}
                >
                  <img src="/html.png" alt="HTML" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 3 + 2}px)`, //index 3
                  }}
                >
                  <img src="/css.svg" alt="HTML" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 4 + 2}px)`, //index 4
                  }}
                >
                  <img src="/ts.svg" alt="Typescript" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 7 + 2}px)`, //index 7
                  }}
                >
                  <img src="/net.png" alt=".NET" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 8 + 2}px)`, //index 8
                  }}
                >
                  <img src="/cSharp.png" alt="C#" className="p-2" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  {t("liveSite")}
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
          <PinContainer title={t("title4")} href="https://ptcgp-stats.web.app/">
            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                <img src="/bg.png" alt="bg-img" />
              </div>
              <img
                src="/pocketStats.png"
                alt={t("title4")}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {t("title4")}
            </h1>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
              {t("des4")}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 1 + 2}px)`, //index 1
                  }}
                >
                  <img src="/vue.png" alt="Vue" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 2 + 2}px)`, //index 2
                  }}
                >
                  <img src="/html.png" alt="HTML" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 3 + 2}px)`, //index 3
                  }}
                >
                  <img src="/css.svg" alt="HTML" className="p-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * 4 + 2}px)`, //index 4
                  }}
                >
                  <img src="/ts.svg" alt="Typescript" className="p-2" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  {t("liveSite")}
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
