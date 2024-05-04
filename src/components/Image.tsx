import React from 'react';

export interface ImageData {
    imageSrc: string;
    imageAlt: string;
    style?: React.CSSProperties;
    aspectH: string
    aspectW: string
}

export const Image: React.FC<ImageData> = ({ imageSrc, imageAlt, style, aspectW, aspectH }) => {
    return (
        <div style={style}
             className={`aspect-w-${aspectW} aspect-h-${aspectH} w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8`}>
            <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
    );
}

export default Image;
