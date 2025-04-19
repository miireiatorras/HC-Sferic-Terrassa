import React, { useState } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Icon } from '@/ui/Icon/Icon';
import './Accordion.scss';

export type AccordionProps = BaseComponentProps & {
    title: string;
    children: React.ReactNode;
};

const block = registerBlockName('Accordion');

export const Accordion = ({ title, children, ...props }: AccordionProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [open ? 'open' : ''],
            })}
        >
            <button
                type="button"
                className={toBEM({ block, element: 'header' })}
                onClick={() => setOpen(!open)}
            >
                <span className={toBEM({ block, element: 'title' })}>
                    {title}
                </span>
                <Icon
                    className={toBEM({ block, element: 'icon' })}
                    icon={open ? 'trophy' : 'trophy'}
                    size="lg"
                />
            </button>
            {open && (
                <div className={toBEM({ block, element: 'content' })}>
                    {children}
                </div>
            )}
        </div>
    );
};
