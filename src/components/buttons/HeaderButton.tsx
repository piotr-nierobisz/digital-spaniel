import React from 'react';

interface Props {
    onClick?: () => void;
    children: React.ReactNode;
    isScrolled: boolean;
}

const HeaderButton: React.FC<Props> = ({children, onClick, isScrolled}): JSX.Element => {
    return (
        <li>
            <a href="#" className={`font-open-sans-semi-bold ${isScrolled ? 'text-DARK_BLUE' : 'text-white'} cursor-pointer text-[20px] leading-[27px] hover-underline-center`}
               onClick={onClick}>
                {children}
            </a>
        </li>
    );

}

export default HeaderButton;