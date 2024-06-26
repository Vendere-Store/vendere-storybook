// components/ProductsList.tsx
import React from 'react';
import ProductCard, { ProductProps } from './ProductCard';

interface ProductsListProps {
    products: ProductProps[]; // Using the ProductProps type ensures consistency
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map(product => <ProductCard {...product} />)}
            </div>
        </div>
    </div>
);

export default ProductsList;
