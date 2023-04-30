import React from 'react';
import useLanguageContext from "../../contexts/LanguageContext";
import {Globals, translations} from "../../static";
// @ts-ignore
import SpanielGradient from "../../assets/Spaniel01_gradient.png";
import {UnderlineButton, HeaderButton} from "../buttons";
import {PrimaryHeader} from "../headers";
import {SubtitleText} from "../text";

const HeaderSection: React.FC = (): JSX.Element => {
    const {language} = useLanguageContext();
    const [showNavbar, setShowNavbar] = React.useState<boolean>(true);
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const [lastScrollPos, setLastScrollPos] = React.useState<number>(0);

    const handleScroll = React.useCallback(() => {
        const currentScrollPos = document.body.scrollTop|| document.documentElement.scrollTop;
        if (currentScrollPos === lastScrollPos) {
            return
        }
        setLastScrollPos(currentScrollPos);

        const isClientAtTheTop = currentScrollPos < Globals.NAVBAR_SENSITIVITY;
        const isUpwardsScroll = currentScrollPos < lastScrollPos;
        setShowNavbar(isClientAtTheTop || isUpwardsScroll);
    }, [lastScrollPos]);


    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const navbarHeaders: string[] = translations[language].HEADER_TITLES;

    return (
        <>
            <nav className="lg:hidden w-full fixed z-40 left-0 bg-LIGHT_GRAY_2 pb-2">
                <div className="flex items-center justify-between px-4 py-2">
                    <div>
                        <img className="h-[70px]" alt="Digital Spaniel" src="/logo.png"/>
                    </div>
                    <button
                        className="w-6 h-6 focus:outline-none text-DARK_BLUE"
                        onClick={() => setShowMenu(!showMenu)} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor" >
                            <path
                                fillRule="evenodd"
                                d="M2 5h16a1 1 0 010 2H2a1 1 0 010-2zm0 6h16a1 1 0 010 2H2a1 1 0 110-2zm0 6h16a1 1 0 010 2H2a1 1 0 110-2z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className={`absolute shadow-3xl top-0 left-0 z-40 bg-LIGHT_GRAY_2 w-3/4 h-screen transition-transform duration-300 ease-in-out ${showMenu ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <ul className="flex flex-col space-y-4 mt-8 px-6">
                        {navbarHeaders.map((item, index) => (
                            <li
                                key={index}
                                className="text-xl text-gray-700 hover:text-DEEP_PINK cursor-pointer"
                                onClick={() => setShowMenu(false)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <nav className={`hidden fixed z-40 left-0 h-32 w-full lg:flex px-40 ${showNavbar ? '' : 'transition-opacity duration-200 opacity-0'}`}>
                <div className="flex flex-row justify-between mt-auto w-full pb-4">
                    <div>
                        <img className="h-[90px]" alt="Digital Spaniel" src="/logo.png"/>
                    </div>
                    <div className="flex">
                        <ul className={`flex space-x-6 my-auto`}>
                            {navbarHeaders.map((header: string, index: number) => (
                                <HeaderButton
                                    key={index}
                                    isScrolled={lastScrollPos > Globals.NAVBAR_SENSITIVITY}>
                                    {header}
                                </HeaderButton>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="w-full h-full bg-white flex flex-row">
                <div className="w-full lg:w-1/2 lg:my-24 mt-24 mb-0 flex z-20">
                    <article className="m-auto lg:w-1/2 bg-[#ffffff90] lg:mt-20 mt-24 px-8 pb-4 lg:pb-0 lg:p-0">
                        <h5 className="text-DEEP_PINK font-open-sans-semi-bold text-base mb-4 lg:leading-[72px]">{translations[language].HEADER.PRE}</h5>
                        <PrimaryHeader firstLine={translations[language].HEADER.TITLE_1} secondLine={translations[language].HEADER.TITLE_2} />
                        <SubtitleText>{translations[language].HEADER.SUBTITLE}</SubtitleText>
                        <UnderlineButton>{translations[language].HEADER.CONTACT_BUTTON}</UnderlineButton>
                    </article>
                </div>
                <div className="hidden lg:flex w-1/2">
                    <img alt="Spaniel" src={SpanielGradient} className="w-full h-full" />
                </div>
                <div className="lg:hidden w-full absolute top-0 left-0 z-0 h-full">
                    <img alt="Spaniel" src={SpanielGradient} className="w-full h-full" />
                </div>
            </header>
        </>

    );
}

export default HeaderSection;