import React from 'react';

interface Props {
    children: React.ReactNode;
}
const MenuLayout: React.FC<Props> = ({children}): JSX.Element => {
    return (
        <div className="flex flex-col mb-12 ml-12">
            {children}
        </div>
    );
}

export default MenuLayout;