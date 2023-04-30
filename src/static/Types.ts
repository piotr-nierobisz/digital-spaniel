import React from "react";

//  Shared among different components data types live here

export enum AllowedLanguages {
    ENGLISH = "en",
}
export interface LanguageContextObject {
    language: AllowedLanguages;
    setLanguage: React.Dispatch<React.SetStateAction<AllowedLanguages>>;
}

export interface Testimonial {
    id: number;
    comment: string;
    author: {
        name: string;
        occupation: string;
        picture: any;
    }
}

export enum ProjectType {
    ALL = "All",
    BRANDING = "Branding",
    WEB_DESIGN = "Web Design",
    DIGITAL_MARKETING = "Digital Marketing",
}

export interface ProjectInfo {
    title: string;
    subtitle: string;
    button: string;
    image: any;
    col_span: number;
    category: ProjectType;
    img_alt: string;
}
