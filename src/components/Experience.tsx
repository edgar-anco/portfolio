import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        {t("h1")} <span className="text-purple"> {t("span")}</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          className="flex-1 text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img
              src="/exp1.svg"
              alt="/exp1.svg"
              className="lg:w-32 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {t("title1")}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {t("desc1")}
              </p>
            </div>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          className="flex-1 text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img
              src="/exp2.svg"
              alt="/exp2.svg"
              className="lg:w-32 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {t("title2")}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {t("desc2")}
              </p>
            </div>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          className="flex-1 text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img
              src="/exp3.svg"
              alt="/exp3.svg"
              className="lg:w-32 md:w-20 w-16"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {t("title3")}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {t("desc3")}
              </p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Experience;
