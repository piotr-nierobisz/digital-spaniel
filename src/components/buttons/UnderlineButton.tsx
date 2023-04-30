import React from 'react';

interface Props {
    onClick?: () => void;
    children: React.ReactNode;
}

const UnderlineButton: React.FC<Props> = ({children, onClick}): JSX.Element => {
    return (
        <button className="transition-all duration-300 ease-in-out transform hover:scale-[1.05]" onClick={onClick}>
            <span className={"hover:decoration-4 font-open-sans-semi-bold text-DARK_BLUE text-xl leading-[27px] "
                +"underline underline-offset-8 decoration-DEEP_PINK decoration-[3px] "}>
                {children}
            </span>
        </button>
    );

}

export default UnderlineButton;