import React from 'react';
import {ProjectInfo} from "../../static";

interface Props {
    project: ProjectInfo
}

const ProjectTile: React.FC<Props> = ({project}): JSX.Element => {
    return (
        <>
            <img
                src={project.image}
                alt={project.img_alt}
                className="w-full h-auto"
            />
            <div className="px-9 py-6 absolute m-2 inset-0 bg-image-gradient opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col-reverse">
                <a href="#" className="font-open-sans lg:text-[18px] text-[14px] leading-[27px] text-white underline underline-offset-8 decoration-white decoration-[3px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 w-fit">{project.button}</a>
                <p className="font-open-sans lg:text-[16px] text-[14px] leading-[27px] text-white lg:mb-8">{project.subtitle}</p>
                <h4 className="font-poppins lg:text-[22px] text-[20px] leading-[36px] text-white lg:mb-4">{project.title}</h4>
            </div>
        </>
    );
}

export default ProjectTile;