// Breadcrumb.tsx
import React from 'react';

export type BreadcrumbItem = {
    id: number;
    name: string;
    href: string;
};

export type BreadcrumbsProps = {
    breadcrumbs: BreadcrumbItem[];
    currentName: string;
    currentHref: string;
};

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({ breadcrumbs, currentName, currentHref }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {breadcrumbs.map((breadcrumb) => (
                    <li key={breadcrumb.id}>
                        <div className="flex items-center">
                            <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                {breadcrumb.name}
                            </a>
                            <svg
                                width={16}
                                height={20}
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-4 text-gray-300">
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                ))}
                <li className="text-sm">
                    <a href={currentHref} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                        {currentName}
                    </a>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
