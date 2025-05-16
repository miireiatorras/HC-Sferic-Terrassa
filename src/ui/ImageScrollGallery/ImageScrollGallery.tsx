import { useRef, useState, useEffect } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ImageScrollGalery.scss';
import { Icon } from '../Icon/Icon';

export type Props = BaseComponentProps & {
    images: string[];
};

const block = registerBlockName('ImageScrollGallery');

export const ImageScrollGallery = ({ images, ...props }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollButtons = () => {
        const c = containerRef.current;
        if (!c) return;
        setCanScrollLeft(c.scrollLeft > 0);
        setCanScrollRight(c.scrollLeft + c.clientWidth < c.scrollWidth);
    };

    useEffect(() => {
        updateScrollButtons();
        window.addEventListener('resize', updateScrollButtons);
        return () => window.removeEventListener('resize', updateScrollButtons);
    }, []);

    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div
                className={toBEM({
                    block,
                    element: 'arrow',
                    modifiers: ['left', canScrollLeft ? '' : 'disabled'],
                })}
                onClick={() => {
                    containerRef.current?.scrollBy({
                        left: -containerRef.current.clientWidth,
                        behavior: 'smooth',
                    });
                }}
            >
                <Icon
                    icon="chevron-up"
                    size="md"
                    className={toBEM({
                        block,
                        element: 'Icon-left',
                    })}
                />
            </div>

            <div
                ref={containerRef}
                onScroll={updateScrollButtons}
                className={toBEM({ block, element: 'container' })}
            >
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        className={toBEM({ block, element: 'image' })}
                    />
                ))}
            </div>

            <div
                className={toBEM({
                    block,
                    element: 'arrow',
                    modifiers: ['right', canScrollRight ? '' : 'disabled'],
                })}
                onClick={() => {
                    containerRef.current?.scrollBy({
                        left: containerRef.current.clientWidth,
                        behavior: 'smooth',
                    });
                }}
            >
                <Icon
                    icon="chevron-up"
                    size="md"
                    className={toBEM({
                        block,
                        element: 'Icon-right',
                    })}
                />
            </div>
        </div>
    );
};
