import React from 'react';

interface Props {
    children: React.ReactNode;
}

const HeaderContainer: React.FC<Props> = ({children}): JSX.Element => {
    return (
        <div className="flex flex-row lg:px-0 px-8">
            <div className="lg:w-1/2 w-full flex">
                <div className="m-auto lg:w-1/2 w-full">
                    {children}
                </div>
            </div>
            <div className="hidden lg:flex w-1/2"></div>
        </div>
    );
}

export default HeaderContainer;