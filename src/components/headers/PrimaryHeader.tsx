import React from 'react';

interface Props {
    firstLine: string;
    secondLine: string;
}
const PrimaryHeader: React.FC<Props> = ({firstLine, secondLine}): JSX.Element => {
    return (
        <h2 className="font-poppins lg:text-[42px] text-[38px] leading-[57px] text-DARK_BLUE mb-12">
            {firstLine}<br/>
            <span className="text-SLATE_GRAY">{secondLine}</span></h2>
    );
}

export default PrimaryHeader;