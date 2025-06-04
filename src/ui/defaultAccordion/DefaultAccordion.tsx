import React, { useState } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Icon } from '@/ui/Icon/Icon';
import './DefaultAccordion.scss';

export type DefaultAccordionProps = BaseComponentProps & {
    /** Title of the DefaultAccordion section. */
    title: string;
    /** Content to be shown when expanded. */
    children: React.ReactNode;
};

const block = registerBlockName('DefaultAccordion');

/**
 * `DefaultAccordion` is a UI component that shows and hides content
 * by expanding or collapsing a section.
 */
export const DefaultAccordion = ({
    title,
    children,
    ...props
}: DefaultAccordionProps) => {
    const [open, setOpen] = useState(true);
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
                    icon={open ? 'chevron-up' : 'chevron-up'}
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
