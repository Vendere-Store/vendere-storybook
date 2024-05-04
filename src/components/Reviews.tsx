// Reviews.tsx
import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import {classNames} from "./helpers";

export type ReviewsProps = {
    average: number;
    totalCount: number;
    href: string;
};

export const Reviews: React.FC<ReviewsProps> = ({ average, totalCount, href }) => {
    return (
        <div>
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
                <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                            key={rating}
                            className={classNames(
                                average > rating ? 'text-gray-900' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <p className="sr-only">{average} out of 5 stars</p>
                <a href={href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {totalCount} reviews
                </a>
            </div>
        </div>
    );
};

export default Reviews;
