import React, { useEffect, useState } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ScrollButton.scss';
import { Icon } from '../Icon/Icon';

export type ScrollButtonProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('ScrollButton');

/**
 * A floating scroll button that toggles between a down arrow (to scroll to bottom)
 * and an up arrow (to scroll to top) once the user reaches the bottom.
 */
export const ScrollButton = ({ children, ...props }: ScrollButtonProps) => {
    const [atBottom, setAtBottom] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY + window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            setAtBottom(scrollY >= fullHeight - 2);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        if (atBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [atBottom ? 'true' : 'false'],
            })}
        >
            {children}
            <button
                type="button"
                onClick={handleClick}
                aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
                className={toBEM({
                    block,
                    element: 'trigger',
                })}
            >
                <Icon
                    icon={atBottom ? 'chevron-up' : 'arrow-down'}
                    className={toBEM({
                        block,
                        element: 'icon',
                    })}
                    aria-hidden="true"
                />
            </button>
        </div>
    );
};
