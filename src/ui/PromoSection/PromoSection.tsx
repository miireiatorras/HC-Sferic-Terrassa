import React, { JSX } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Button } from '@/ui/button/Button';
import './PromoSection.scss';
import { NavLink } from 'react-router-dom';

const block = registerBlockName('PromoSection');

export type PromoSectionProps = BaseComponentProps & {
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
    /** Optional URL: if provided, the button will navigate there */
    buttonHref?: string;
};

/**
 * PromoSection renders a card with:
 *  - a top image
 *  - a bold heading
 *  - body text
 *  - a call-to-action button (always Button component)
 *
 * All texts, image and button behavior are configurable via props.
 */
export const PromoSection = ({
    imageSrc,
    imageAlt = '',
    heading,
    children,
    buttonText,
    ...props
}: PromoSectionProps): JSX.Element => {
    return (
        <div
            {...getBaseComponentProps({ ...props, block })}
            className={toBEM({ block })}
        >
            <img
                loading="lazy"
                src={imageSrc}
                alt={imageAlt}
                className={toBEM({ block, element: 'image' })}
            />

            <h2 className={toBEM({ block, element: 'heading' })}>{heading}</h2>

            <div className={toBEM({ block, element: 'content' })}>
                {children}
            </div>

            <Button
                as={NavLink}
                to="https://docs.google.com/forms/d/e/1FAIpQLSccAPpV2KQ_yJYKAwE0RcNCKknv4BFVvb7gkVEfUXescob0lA/viewform"
                variant="primary-green"
            >
                {buttonText}
            </Button>
        </div>
    );
};
