import React from 'react';
import useLanguageContext from "../../contexts/LanguageContext";
import {translations} from "../../static";
import {SubtitleText} from "../text";

const StudiesSection: React.FC = (): JSX.Element => {
    const {language} = useLanguageContext();
    const [currentStudy, setCurrentStudy] = React.useState<number>(1);
    const nextStudy = () => {
        setCurrentStudy((currentStudy) => (currentStudy + 1) % 3);
    }
    const prevStudy = () => {
        setCurrentStudy((currentStudy) => Math.abs((currentStudy - 1) % 3));
    }

    return (
        <section className="bg-white flex flex-col w-full mt-36 px-8 lg:px-0">
            <article className="flex flex-col lg:w-3/4 mx-auto">
                <h2 className="font-poppins text-[38px] leading-[57px] text-DARK_BLUE mb-4 mx-auto">
                    {translations[language].STUDIES.TITLE}
                </h2>
                <div className="lg:w-8/12 w-full mx-auto text-center">
                    <SubtitleText>{translations[language].STUDIES.SUBTITLE}</SubtitleText>
                </div>
            </article>
            <div className="flex lg:flex-row flex-col lg:w-3/4 w-full mx-auto">
                <div className="lg:w-8/12">
                    <img className="w-full max-h-[500px]"
                        src={translations[language].STUDIES.STUDIES_INFO[currentStudy].IMAGE}
                        alt="Screenshot of online dashboard" loading="lazy"/>
                </div>
                <div className="flex lg:w-5/12 mx-auto lg:py-10 py-0">
                    <div className="bg-DARK_BLUE flex flex-col justify-between">
                        <div className="h-16"></div>
                        <article className="min-w-[75%] ml-8">
                            <h4 className="font-poppins text-[24px] font-bold leading-[36px] text-white mb-4">{translations[language].STUDIES.STUDIES_INFO[currentStudy].TITLE}</h4>
                            <p className="font-open-sans text-[18ox] leading-[27px] text-white mb-8">{translations[language].STUDIES.STUDIES_INFO[currentStudy].SUBTITLE}</p>
                            <a className="font-open-sans text-[18px] leading-[27px] text-white underline underline-offset-8 decoration-white decoration-[3px] cursor-pointer">{translations[language].STUDIES.STUDIES_INFO[currentStudy].BUTTON}</a>'
                        </article>
                        <div className="flex flex-row w-full">
                            <div className="ml-auto flex h-16 w-16 bg-GRAYISH_BLUE cursor-pointer" onClick={prevStudy}>
                                <a className="text-SLATE_GRAY m-auto text-lg font-bold">＜</a>
                            </div>
                            <div className="flex h-16 w-16 bg-white cursor-pointer" onClick={nextStudy}>
                                <a className="text-DARK_BLUE m-auto font-bold">＞</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudiesSection;