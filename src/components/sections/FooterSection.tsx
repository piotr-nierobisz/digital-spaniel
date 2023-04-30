import React from 'react';
import {translations} from "../../static";
import useLanguageContext from "../../contexts/LanguageContext";
import {MenuHeader, PrimaryHeader} from "../headers";
import {UnderlineButton} from "../buttons";
import {MenuLayout} from "../layouts";
import {MenuText} from "../text";

const FooterSection: React.FC = (): JSX.Element => {
    const {language} = useLanguageContext();
    return (
        <footer className="bg-LIGHT_GRAY flex flex-col w-full lg:px-0 px-8">
            <div className="flex lg:flex-row flex-col w-full mx-auto justify-between pt-36 lg:px-32 h-auto">
                <div className="flex flex-col justify-between items-start mb-12 lg:mb-0">
                    <PrimaryHeader
                        firstLine={translations[language].FOOTER.TITLE_1}
                        secondLine={translations[language].FOOTER.TITLE_2}
                    />
                    <UnderlineButton>{translations[language].FOOTER.CONTACT_BUTTON}</UnderlineButton>
                </div>
                <div className="hidden lg:flex flex-col w-1/5"></div>
                <div className="flex flex-col">
                    <MenuLayout>
                        <MenuHeader>{translations[language].FOOTER.LINK_SECTION.A.TITLE}</MenuHeader>
                        <ul>
                            {translations[language].FOOTER.LINK_SECTION.A.LINKS.map((link: string, index: number) => (
                                <MenuText key={index}>{link}</MenuText>
                            ))}
                        </ul>
                    </MenuLayout>
                </div>
                <div className="flex flex-col">
                    <MenuLayout>
                        <MenuHeader>{translations[language].FOOTER.LINK_SECTION.B.TITLE}</MenuHeader>
                        <ul>
                            {translations[language].FOOTER.LINK_SECTION.B.LINKS.map((link: string, index: number) => (
                                <MenuText key={index}>{link}</MenuText>
                            ))}
                        </ul>
                    </MenuLayout>
                </div>
                <div className="flex flex-col">
                    <MenuLayout>
                        <MenuHeader>{translations[language].FOOTER.LINK_SECTION.C.TITLE}</MenuHeader>
                        <p className="font-open-sans text-SLATE_GRAY leading-[32px] tracking-[0.53px] text-[20px] mt-2"><span className="font-bold">{translations[language].FOOTER.LINK_SECTION.C.PHONE.LABEL}</span>
                            <br/>{translations[language].FOOTER.LINK_SECTION.C.PHONE.NUMBER}</p>
                        <p className="font-open-sans text-SLATE_GRAY leading-[32px] tracking-[0.53px] text-[20px] mt-4"><span className="font-bold">{translations[language].FOOTER.LINK_SECTION.C.EMAIL.LABEL}</span>
                            <br/>{translations[language].FOOTER.LINK_SECTION.C.EMAIL.ADDRESS}</p>
                    </MenuLayout>
                </div>
            </div>
            <div className="flex w-full mx-auto px-32 mb-9 mt-36">
                <p className="font-open-sans-semi-bold text-SLATE_GRAY_TRANSPARENT text-[21px] leading-[32px] tracking-[0.53px]">{translations[language].FOOTER.COPYRIGHT_TEXT}</p>
            </div>
        </footer>
    );
}

export default FooterSection;