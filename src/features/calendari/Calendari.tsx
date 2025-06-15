import React from 'react';
import data from './calendari.json';
import { Button } from '@/ui/button/Button';
import Title from '@/ui/titles/Title';
import { NavLink } from 'react-router-dom';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Calendari.scss';
import { IconNames } from '@/ui/Icon/Icon';

import type { ButtonProps } from '@/ui/button/Button';
import { TitleProps } from '@/ui/titles/Title';

interface ButtonData {
    text: string;
    href: string;
    variant: ButtonProps<object>['variant'];
    icon?: IconNames;
    iconPosition?: 'left' | 'right';
}

interface CalendariData {
    header: string;
    headerVariant?: TitleProps['variant'];
    paragraphs: string[];
    buttons: ButtonData[];
}

const { header, headerVariant, paragraphs, buttons } =
    data as unknown as CalendariData;

const block = registerBlockName('Calendari');

export const Calendari: React.FC<BaseComponentProps> = (props) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Title variant={headerVariant}>{header}</Title>
            <section className={toBEM({ block, element: 'section' })}>
                {paragraphs[0] && <p>{paragraphs[0]}</p>}

                <div className={toBEM({ block, element: 'buttons-container' })}>
                    {buttons.map((btn, i) => (
                        <Button
                            key={i}
                            as={NavLink}
                            to={btn.href}
                            variant={btn.variant}
                            icon={btn.icon}
                            iconPosition={btn.iconPosition}
                        >
                            {btn.text}
                        </Button>
                    ))}
                </div>

                {paragraphs[1] && <p>{paragraphs[1]}</p>}
            </section>
        </div>
    );
};

export default Calendari;
