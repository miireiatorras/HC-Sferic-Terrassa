import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { PromoSection } from './PromoSection';

describe('PromoSection component', () => {
    const defaultProps = {
        imageSrc: '/path/to/image.jpg',
        imageAlt: 'Promo image',
        heading: 'Special Offer',
        buttonText: 'Sign Up Now',
    };
    const bodyText = 'This is the promotional body content.';

    it('renders image, heading, body content and CTA link correctly', () => {
        render(
            <MemoryRouter>
                <PromoSection {...defaultProps}>{bodyText}</PromoSection>
            </MemoryRouter>
        );

        // Image
        const img = screen.getByAltText(
            defaultProps.imageAlt!
        ) as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain(defaultProps.imageSrc);
        expect(img).toHaveClass('PromoSection__image');

        // Heading
        const heading = screen.getByRole('heading', {
            level: 2,
            name: defaultProps.heading,
        });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('PromoSection__heading');

        // Body content
        expect(screen.getByText(bodyText)).toBeInTheDocument();
        const contentDiv =
            heading.nextElementSibling?.parentElement?.querySelector(
                '.PromoSection__content'
            );
        expect(contentDiv).toBeInTheDocument();
        expect(contentDiv).toHaveTextContent(bodyText);

        // CTA link (NavLink)
        const link = screen.getByRole('link', {
            name: defaultProps.buttonText,
        });
        expect(link).toBeInTheDocument();
        // The component hardcodes this URL
        expect(link).toHaveAttribute(
            'href',
            'https://docs.google.com/forms/d/e/1FAIpQLSccAPpV2KQ_yJYKAwE0RcNCKknv4BFVvb7gkVEfUXescob0lA/viewform'
        );
    });
});
