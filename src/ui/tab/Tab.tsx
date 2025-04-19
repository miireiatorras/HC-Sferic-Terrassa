import React from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Tab.scss';

export type TabProps = BaseComponentProps & {
    label: string;
    active?: boolean;
    onClick?: () => void;
};

const block = registerBlockName('Tab');

export const Tab = ({ label, active = false, onClick, ...props }: TabProps) => {
    return (
        <button
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [active && 'active'],
            })}
            type="button"
            onClick={onClick}
            className={toBEM({
                block,
                element: 'item',
                modifiers: active ? ['active'] : [],
            })}
        >
            {label}
        </button>
    );
};
