import React from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Tab.scss';

export type TabProps = BaseComponentProps & {
    /** Label text to display inside the tab. */
    label: string;
    /** Whether the tab is currently active. */
    active?: boolean;
    /** Function to call when the tab is clicked. */
    onClick?: () => void;
    /** Optional keydown handler for keyboard navigation */
    onKeyDown?: (e: React.KeyboardEvent) => void;
    /** Accessibility role */
    role?: string;
    /** Selected state for ARIA */
    'aria-selected'?: boolean;
    /** Tab index for focus control */
    tabIndex?: number;
};

const block = registerBlockName('Tab');

/**
 * `Tab` is a UI component used for navigation between views or sections.
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
    (
        {
            label,
            active = false,
            onClick,
            onKeyDown,
            role,
            'aria-selected': ariaSelected,
            tabIndex,
            ...props
        },
        ref
    ) => {
        return (
            <button
                {...getBaseComponentProps({
                    ...props,
                    block,
                    modifiers: [active && 'active'],
                })}
                type="button"
                onClick={onClick}
                onKeyDown={onKeyDown}
                ref={ref}
                role={role}
                aria-selected={ariaSelected}
                tabIndex={tabIndex}
                aria-pressed={active}
                aria-label={label}
                className={toBEM({
                    block,
                    element: 'item',
                    modifiers: active ? ['active'] : [],
                })}
            >
                {label}
            </button>
        );
    }
);
