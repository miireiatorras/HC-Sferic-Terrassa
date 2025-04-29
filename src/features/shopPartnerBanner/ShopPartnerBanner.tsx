import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ShopPartnerBanner.scss';
import { Icon } from '@/ui/Icon/Icon';
import { JSX } from 'react';

const block = registerBlockName('ShopPartnerBanner');

export type Props = BaseComponentProps & {
    /** URL of the partner logo image */
    logoSrc: string;
    /** Alt text for the partner logo */
    logoAlt?: string;
    /** Main heading text */
    title: string;
    /** List of feature bullet points */
    items: string[];
    /** Label shown above the star rating */
    reviewsLabel: string;
    /** Number of filled stars to display (0–5) */
    rating: number;
};

/**
 * ShopPartnerBanner displays:
 *  - a partner logo
 *  - a heading
 *  - a vertical list of bullet points with check icons
 *  - a “reviews” label and star rating on the right
 */
export const ShopPartnerBanner = ({
    logoSrc,
    logoAlt = '',
    title,
    items,
    reviewsLabel,
    rating,
    ...props
}: Props): JSX.Element => {
    const stars = Array.from({ length: rating }, (_, i) => (
        <Icon
            key={i}
            icon="star-full"
            className={toBEM({ block, element: 'star' })}
        />
    ));

    return (
        <div
            {...getBaseComponentProps({ ...props, block })}
            className={toBEM({ block })}
        >
            <div className={toBEM({ block, element: 'left' })}>
                <img
                    src={logoSrc}
                    alt={logoAlt}
                    className={toBEM({ block, element: 'logo' })}
                />
            </div>

            <div className={toBEM({ block, element: 'content' })}>
                <h3 className={toBEM({ block, element: 'title' })}>{title}</h3>
                <ul className={toBEM({ block, element: 'list' })}>
                    {items.map((text, idx) => (
                        <li
                            key={idx}
                            className={toBEM({ block, element: 'item' })}
                        >
                            <Icon
                                icon="check-circle"
                                className={toBEM({
                                    block,
                                    element: 'item-icon',
                                })}
                            />
                            <span
                                className={toBEM({
                                    block,
                                    element: 'item-text',
                                })}
                            >
                                {text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={toBEM({ block, element: 'reviews' })}>
                <span className={toBEM({ block, element: 'reviews-label' })}>
                    {reviewsLabel}
                </span>
                <div className={toBEM({ block, element: 'stars' })}>
                    {stars}
                </div>
            </div>
        </div>
    );
};
