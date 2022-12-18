import React from 'react';

interface CatalogHeaderProps {
    title: string;
}

const CatalogHeader = ({title}: CatalogHeaderProps) => {
    return (
        <div className="relative h-[200px] text-center">
            <div
                className="absolute left-0 top-0 h-full w-full flex justify-center items-end bg-gradient-to-t from-black">
                <h2 className="text-white text-5xl font-bold">{title}</h2>
            </div>
            <img className="h-full w-full object-cover" src={`/images/footer.png`} alt={title}/>
        </div>
    );
};

export default CatalogHeader;