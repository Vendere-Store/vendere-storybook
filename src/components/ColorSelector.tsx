import React, {useState} from 'react';
import {RadioGroup} from '@headlessui/react';
import {classNames} from "./helpers";

// Define the types for the props
type ColorOption = {
    name: string;
    class: string; // CSS classes for the color indicator
    selectedClass: string; // CSS classes for when the color is selected
};

export type ColorSelectorProps = {
    colors: ColorOption[];
    defaultColor?: string; // Optional prop to set a default color by name
};

export const ColorSelector: React.FC<ColorSelectorProps> = ({colors, defaultColor}) => {
    const defaultSelectedColor = colors.find(color => color.name === defaultColor) || colors[0];
    const [selectedColor, setSelectedColor] = useState<ColorOption>(defaultSelectedColor);

    return (
        <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                <div className="flex items-center space-x-3">
                    {colors.map((color) => (
                        <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                                classNames(
                                    color.selectedClass,
                                    active && checked ? 'ring ring-offset-1' : '',
                                    !active && checked ? 'ring-2' : '',
                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                )
                            }>
                            <RadioGroup.Label as="span" className="sr-only">
                                {color.name}
                            </RadioGroup.Label>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    color.class,
                                    'h-8 w-8 rounded-full border border-black border-opacity-10'
                                )}
                            />
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};

export default ColorSelector;
