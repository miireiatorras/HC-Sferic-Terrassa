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
                aria-label="Desplaça la galeria cap a l'esquerra"
                role="button"
                tabIndex={0}
            >
                <Icon
                    icon="chevron-up"
                    size="md"
                    className={toBEM({
                        block,
                        element: 'Icon-left',
                    })}
                    aria-hidden="true"
                />
            </div>

            <div
                ref={containerRef}
                onScroll={updateScrollButtons}
                className={toBEM({ block, element: 'container' })}
                aria-label="Galeria d'imatges scrollable"
                role="region"
            >
                {images.map((src, idx) => (
                    <img
                        loading="lazy"
                        key={idx}
                        src={src}
                        alt={`Imatge ${idx + 1}`}
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
                aria-label="Desplaça la galeria cap a la dreta"
                role="button"
                tabIndex={0}
            >
                <Icon
                    icon="chevron-up"
                    size="md"
                    className={toBEM({
                        block,
                        element: 'Icon-right',
                    })}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};
