import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import * as iconNames from '@/config/icons/constants';
import iconSet from '@/config/icons/selection.json';
import IcomoonReact from 'icomoon-react';
import './Icon.scss';

export type IconNames = (typeof iconNames)[keyof typeof iconNames];

export type IconProps = BaseComponentProps & {
    /** Name of the icon to display. */
    icon: IconNames;
    /** Size of the icon (optional). */
    size?: 'xs' | 'sm' | 'md' | 'ml' | 'lg' | 'xl';
};

const block = registerBlockName('Icon');

/**
 * `Icon` is a UI component that renders a custom icon
 * from a predefined icon set using Icomoon.
 */
export const Icon = ({ size, icon, ...props }: IconProps) => {
    return (
        <IcomoonReact
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: size ? [size] : [],
            })}
            iconSet={iconSet}
            icon={icon}
            style={{ fill: 'currentColor' }}
        />
    );
};
