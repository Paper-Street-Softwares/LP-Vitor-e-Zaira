import { useTranslation } from "react-i18next";
import content from "../../content/content";

import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import FlashCard from "../cards/FlashCard";

export default function FlashySection({ colorMode }) {
  const { t } = useTranslation();

  // Define background and text colors based on colorMode
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={false}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t("flashy.miniTag")}
        sectionHeaderTitle={t("flashy.title")}
        sectionHeaderSubtitle={t("flashy.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode="dark"
      />
      <SectionWrapper>
        <div className="flex flex-col items-center w-full tablet1:justify-between desktop1:justify-evenly desktop1:flex-row gap-4 desktop1:gap-0">
          <FlashCard
            icon={content.texts.flash.card1.icon}
            title={t("flashy.card1.title")}
            text={t("flashy.card1.text")}
          />
          <FlashCard
            icon={content.texts.flash.card2.icon}
            title={t("flashy.card2.title")}
            text={t("flashy.card2.text")}
          />
          <FlashCard
            icon={content.texts.flash.card3.icon}
            title={t("flashy.card3.title")}
            text={t("flashy.card3.text")}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
