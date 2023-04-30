import React from 'react';
import {translations} from "../../static";
import {MenuHeader, PrimaryHeader} from "../headers";
import {UnderlineButton} from "../buttons";
import useLanguageContext from "../../contexts/LanguageContext";
import {MenuText} from "../text";
import {MenuLayout} from "../layouts";

const ServicesSection: React.FC = (): JSX.Element => {
    const {language} = useLanguageContext();

    return (
        <section className="flex lg:flex-row flex-col bg-LIGHT_GRAY w-full">
            <div className="lg:w-1/2 w-full flex">
                <article className="mx-auto my-44 lg:w-1/2 px-8 lg:px-0">
                    <PrimaryHeader firstLine={translations[language].SERVICES.TITLE_1} secondLine={translations[language].SERVICES.TITLE_2} />
                    <p className="font-open-sans text-SLATE_GRAY text-[21px] mb-16 leading-[38px]">{translations[language].SERVICES.SUBTITLE}</p>
                    <UnderlineButton>{translations[language].SERVICES.PROCESS_BUTTON}</UnderlineButton>
                </article>
            </div>
            <div className="lg:w-1/2 flex lg:flex-col flex-row lg:my-44 my-20 flex-wrap lg:max-h-[34rem]">
                <MenuLayout>
                    <MenuHeader>{translations[language].SERVICES.LINK_SECTION.A.TITLE}</MenuHeader>
                    <ul>
                        {translations[language].SERVICES.LINK_SECTION.A.LINKS.map((link: string, index: number) => (
                            <MenuText key={index} >{link}</MenuText>
                        ))}
                    </ul>
                </MenuLayout>
                <MenuLayout>
                    <MenuHeader>{translations[language].SERVICES.LINK_SECTION.B.TITLE}</MenuHeader>
                    <ul>
                        {translations[language].SERVICES.LINK_SECTION.B.LINKS.map((link: string, index: number) => (
                            <MenuText key={index} >{link}</MenuText>
                        ))}
                    </ul>
                </MenuLayout>
                <MenuLayout>
                    <MenuHeader>{translations[language].SERVICES.LINK_SECTION.C.TITLE}</MenuHeader>
                    <ul>
                        {translations[language].SERVICES.LINK_SECTION.C.LINKS.map((link: string, index: number) => (
                            <MenuText key={index} >{link}</MenuText>
                        ))}
                    </ul>
                </MenuLayout>
            </div>
        </section>
    );
}

export default ServicesSection;