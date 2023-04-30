import React from 'react';

interface Props {
    children: React.ReactNode;
}

const SubtitleText: React.FC<Props> = ({children}): JSX.Element => {
    return (
        <p className="font-open-sans text-SLATE_GRAY lg:text-[20px] text-[17px] mb-16 leading-[38px]">
            {children}
        </p>
    );
}

export default SubtitleText;