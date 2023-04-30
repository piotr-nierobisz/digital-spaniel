import React from 'react';

interface Props {
    onClick?: () => void;
    name: string;
    isSelected: boolean;
}

const ProjectButton: React.FC<Props> = ({name, onClick, isSelected}): JSX.Element => {
    const selectedButtonStyle = React.useMemo(() =>{
        return isSelected
            ? "flex text-center border-b-[3px] border-DEEP_PINK w-48 animate-bounce"
            : "flex text-center border-b-[1px] border-SLATE_GRAY w-48"
    }, [isSelected])

    const selectedTextStyle = React.useMemo(() =>{
        return isSelected
            ? "font-open-sans-bold font-bold text-DARK_BLUE lg:text-[20px] lg:text-[18px] leading-[27px] m-auto"
            : "font-open-sans-regular text-DARK_BLUE lg:text-[21px] text-[18px] leading-[27px] m-auto"
    }, [isSelected])


    return (
        <button className={selectedButtonStyle} onClick={onClick}>
            <span className={selectedTextStyle} >{name}</span>
        </button>
    );


}

export default ProjectButton;