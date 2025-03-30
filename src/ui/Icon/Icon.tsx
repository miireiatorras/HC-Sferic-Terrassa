import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import * as iconNames from '@/config/icons/constants';
import iconSet from '@/config/icons/selection.json';
import IcomoonReact from 'icomoon-react';

export type IconNames = (typeof iconNames)[keyof typeof iconNames];

export type IconProps = BaseComponentProps & {
    icon: IconNames;
    size?: 'xs' | 'sm' | 'md' | 'ml' | 'lg' | 'xl';
};

const block = registerBlockName('Icon');
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
        ></IcomoonReact>
    );
};
