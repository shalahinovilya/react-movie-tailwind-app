import React, {memo} from 'react';

interface DetailHeaderProps {
    imgPath: string;
}

const DetailHeader = memo(({imgPath}: DetailHeaderProps) => {
    return (
        <div className="relative top-0 left-0 w-full h-[400px]
        after:absolute after:bottom-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient-to-t after:from-black">
            <img className="h-full w-full object-cover" src={`https://image.tmdb.org/t/p/original${imgPath}`}
                 alt={'header'}/>
        </div>
    );
});

export default DetailHeader;