import React from "react";
import ContextFactory from "./ContextFactory";
import {
    LanguageContextObject,
    AllowedLanguages
} from "../static";

interface Props {
    children: React.ReactNode;
}


const [useLanguageContext, LanguageContext] = ContextFactory<LanguageContextObject>();
export default useLanguageContext

export function LanguageProvider({ children }: Props) {
    const [language, setLanguage] = React.useState<AllowedLanguages>(AllowedLanguages.ENGLISH);

    const payload: LanguageContextObject = {
        language,
        setLanguage: setLanguage,
    }

    return (
        <LanguageContext value={payload}>
            {children}
        </LanguageContext>
    );
}