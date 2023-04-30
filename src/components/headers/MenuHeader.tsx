import React from 'react';

interface Props {
    children: React.ReactNode;
}

const MenuHeader: React.FC<Props> = ({children}): JSX.Element => {
    return (
        <h3 className="font-poppins uppercase lg:text-[21px] text-[18px] leading-[38px] text-DARK_BLUE tracking-[2.1px]">
            {children}
        </h3>
    );
}

export default MenuHeader;