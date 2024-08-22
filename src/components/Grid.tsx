import { useTranslations } from "next-intl";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const t = useTranslations("Grid");

  return (
    <section id="about">
      <BentoGrid>
        <BentoGridItem
          id={1}
          key={1}
          title={t("title1")}
          description={t("description1")}
          className={t("className1")}
          img={t("img1")}
          imgClassName={t("imgClassName1")}
          titleClassName={t("titleClassName1")}
          spareImg={t("spareImg1")}
        />
        <BentoGridItem
          id={2}
          key={2}
          title={t("title2")}
          description={t("description2")}
          className={t("className2")}
          img={t("img2")}
          imgClassName={t("imgClassName2")}
          titleClassName={t("titleClassName2")}
          spareImg={t("spareImg2")}
        />
        <BentoGridItem
          id={3}
          key={3}
          title={t("title3")}
          description={t("description3")}
          className={t("className3")}
          img={t("img3")}
          imgClassName={t("imgClassName3")}
          titleClassName={t("titleClassName3")}
          spareImg={t("spareImg3")}
        />
        <BentoGridItem
          id={4}
          key={4}
          title={t("title4")}
          description={t("description4")}
          className={t("className4")}
          img={t("img4")}
          imgClassName={t("imgClassName4")}
          titleClassName={t("titleClassName4")}
          spareImg={t("spareImg4")}
        />
        <BentoGridItem
          id={5}
          key={5}
          title={t("title5")}
          description={t("description5")}
          className={t("className5")}
          img={t("img5")}
          imgClassName={t("imgClassName5")}
          titleClassName={t("titleClassName5")}
          spareImg={t("spareImg5")}
        />
        <BentoGridItem
          id={6}
          key={6}
          title={t("title6")}
          description={t("description6")}
          className={t("className6")}
          img={t("img6")}
          imgClassName={t("imgClassName6")}
          titleClassName={t("titleClassName6")}
          spareImg={t("spareImg6")}
          emailCopied={t("emailCopied")}
          copyMyEmail={t("copyMyEmail")}
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;
