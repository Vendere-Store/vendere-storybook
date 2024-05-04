import Image from "./Image";
import React from "react";

export interface Product {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
}

interface ProductsListProps {
    products: Product[]; // Define the expected props more explicitly
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                        <Image imageAlt={product.imageAlt} imageSrc={product.imageSrc}/>
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                    </a>
                ))}
            </div>
        </div>
    </div>
)


export default ProductsList
