import React from 'react';

interface Props {
    children: React.ReactNode;
}
const PageContainer: React.FC<Props> = ({children}): JSX.Element => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    );
}

export default PageContainer;