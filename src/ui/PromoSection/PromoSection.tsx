import React from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './PromoSection.scss';

const block = registerBlockName('PromoSection');

export type Props = BaseComponentProps & {
    /** URL of the main promotional image */
    imageSrc: string;
    /** Alt text for the promotional image */
    imageAlt?: string;
    /** Main heading text */
    heading: string;
    /** Body content (usually a paragraph) */
    children: React.ReactNode;
    /** Text to display on the CTA button */
    buttonText: string;
    /** Click handler for the CTA button */
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Optional URL: if provided, the button is rendered as a link */
    buttonHref?: string;
};

/**
 * PromoSection renders a card with:
 *  - a top image
 *  - a bold heading
 *  - body text
 *  - a call-to-action button or link
 *
 * All texts, image and button behavior are configurable via props.
 */
export const PromoSection = ({
    imageSrc,
    imageAlt = '',
    heading,
    children,
    buttonText,
    onButtonClick,
    buttonHref,
    ...props
}: Props): JSX.Element => {
    const Tag = buttonHref ? 'a' : 'button';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tagProps: any = buttonHref
        ? { href: buttonHref, role: 'button' }
        : { onClick: onButtonClick, type: 'button' };

    return (
        <div
            {...getBaseComponentProps({ ...props, block })}
            className={toBEM({ block })}
        >
            <img
                src={imageSrc}
                alt={imageAlt}
                className={toBEM({ block, element: 'image' })}
            />

            <h2 className={toBEM({ block, element: 'heading' })}>{heading}</h2>

            <div className={toBEM({ block, element: 'content' })}>
                {children}
            </div>

            <Tag {...tagProps} className={toBEM({ block, element: 'button' })}>
                {buttonText}
            </Tag>
        </div>
    );
};
