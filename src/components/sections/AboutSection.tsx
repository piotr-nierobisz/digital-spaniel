import React from 'react';
import useLanguageContext from "../../contexts/LanguageContext";
import {PrimaryHeader} from "../headers";
import {translations} from "../../static";
// @ts-ignore
import office01 from "../../assets/office01.png";
// @ts-ignore
import office02 from "../../assets/office02.png";
// @ts-ignore
import office03 from "../../assets/office03.png";
// @ts-ignore
import office04 from "../../assets/office04.png";
import {UnderlineButton} from "../buttons";
import {HeaderContainer} from "../layouts";

const AboutSection: React.FC = (): JSX.Element => {
    const {language} = useLanguageContext();

    return (
        <section className="bg-white flex flex-col w-full mt-32">
            <HeaderContainer>
                <PrimaryHeader
                    firstLine={translations[language].ABOUT.TITLE_1}
                    secondLine={translations[language].ABOUT.TITLE_2}
                />
            </HeaderContainer>
            <div className="flex flex-row bg-LIGHT_GRAY w-full">
                <div className="lg:w-3/4 mx-auto my-24">
                    <div className="flex w-full flex-col-reverse lg:flex-row">
                        <div className="lg:w-1/2 flex flex-col">
                            <div>
                                <img src={office01}
                                    alt="People sitting at a desk working" />
                            </div>
                            <div className="flex flex-row justify-start lg:my-auto mx-auto lg:mx-0">
                                <UnderlineButton>{translations[language].ABOUT.ABOUT_BUTTON}</UnderlineButton>
                                <div className="mx-6"></div>
                                <UnderlineButton>{translations[language].ABOUT.CAREERS_BUTTON}</UnderlineButton>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex flex-col">
                            <div className="lg:ml-auto lg:mr-0 m-auto">
                                <img src={office03}
                                    alt="People gathered around working space" />
                            </div>
                            <div className="lg:ml-auto lg:mr-0 m-auto">
                                <img src={office04}
                                    alt="Sign that says 'Punch today in the face'" />
                            </div>
                        </div>
                        <div className="lg:w-1/5 m-auto lg:m-0">
                            <img src={office02}
                                alt="Empty hallway of an office building" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;