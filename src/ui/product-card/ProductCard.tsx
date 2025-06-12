import React, { JSX } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ProductCard.scss';

const block = registerBlockName('ProductCard');

export type Props = BaseComponentProps & {
    /** URL of the product image */
    imageSrc: string;
    /** Alt text for the product image */
    imageAlt?: string;
    /** Product title */
    title: string;
    /** Price string to display (e.g. "32€") */
    price: string;
    /** Optional subtitle shown under the price */
    subtitle?: string;
    /** Click handler to make the card clickable */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /** Optional href: if provided, the whole card becomes a link */
    href?: string;
};

/**
 * ProductCard displays a product image, title, price and subtitle
 * inside a card with rounded corners and a border. It can be
 * made clickable either by passing `onClick` or `href`.
 */
export const ProductCard = ({
    imageSrc,
    imageAlt = '',
    title,
    price,
    subtitle,
    onClick,
    href,
    ...props
}: Props): JSX.Element => {
    const isClickable = Boolean(onClick || href);
    const modifiers = isClickable ? ['clickable'] : [];
    const Tag = href ? 'a' : 'div';

    return (
        <Tag
            {...getBaseComponentProps({ ...props, block, modifiers })}
            {...(href ? { href } : {})}
            className={toBEM({ block, modifiers })}
            onClick={
                onClick as React.MouseEventHandler<
                    HTMLAnchorElement | HTMLDivElement
                >
            }
        >
            <div className={toBEM({ block, element: 'image-wrapper' })}>
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={imageAlt}
                    className={toBEM({ block, element: 'image' })}
                />
            </div>
            <div className={toBEM({ block, element: 'info' })}>
                <p className={toBEM({ block, element: 'title' })}>{title}</p>
                <div className={toBEM({ block, element: 'price' })}>
                    {price}
                </div>
                {subtitle && (
                    <div className={toBEM({ block, element: 'subtitle' })}>
                        {subtitle}
                    </div>
                )}
            </div>
        </Tag>
    );
};
