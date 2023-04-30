import React from 'react';

interface Props {
    children: React.ReactNode;
}

const MenuText: React.FC<Props> = ({children}): JSX.Element => {
    return (
        <li className="relative group">
            <a className="pr-4 font-open-sans-semi-bold text-SLATE_GRAY lg:text-[21px] text-[18px] leading-[48px] lg:leading-[58px] tracking-[0.53px] cursor-pointer">
                {children}
            </a>
            <span className="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-200">
                <span className="font-poppins w-6 h-6 inline-block rounded-full bg-SLATE_GRAY text-white font-bold text-center">&#x003E;</span>
            </span>
        </li>
    );
}

export default MenuText;