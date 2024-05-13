// components/Product.tsx
import React from 'react';
import Image from './Image';

export interface ProductProps {
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
}

export const ProductCard: React.FC<ProductProps> = ({ name, href, price, imageSrc, imageAlt }) => (
    <a href={href} className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image imageSrc={imageSrc} imageAlt={imageAlt} />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </a>
);

export default ProductCard;
