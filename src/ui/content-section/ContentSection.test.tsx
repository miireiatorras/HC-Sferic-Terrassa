import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { ContentSection, ContentSectionProps } from './ContentSection';

describe('ContentSection component', () => {
    const defaultProps: ContentSectionProps = {
        title: 'Section Title',
        description: 'This is a description.',
        stats: [
            { icon: 'location_on', value: '100', label: 'Users' },
            {
                icons: ['chevron-up', 'arrow-down'],
                value: <span>More</span>,
                label: 'Clicks',
            },
        ],
        linkText: 'Learn more',
        linkHref: '/learn-more',
        imageSrc: '/img.png',
        imageAlt: 'Promo image',
    };

    it('renders the title and description', () => {
        render(<ContentSection {...defaultProps} />);
        const heading = screen.getByRole('heading', {
            level: 2,
            name: defaultProps.title,
        });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('ContentSection__title');

        const desc = screen.getByText(defaultProps.description as string);
        expect(desc).toBeInTheDocument();
        expect(desc).toHaveClass('ContentSection__description');
    });

    it('renders all provided stats with labels and values', () => {
        render(<ContentSection {...defaultProps} />);
        const statsContainer = screen
            .getByText(defaultProps.stats![0].label)
            .closest('div');
        expect(statsContainer).toHaveClass('ContentSection__stat');

        expect(screen.getByText('Users')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();

        expect(screen.getByText('Clicks')).toBeInTheDocument();
        expect(screen.getByText('More')).toBeInTheDocument();
    });

    it('renders the link with correct href and text', () => {
        render(<ContentSection {...defaultProps} />);
        const link = screen.getByRole('link', { name: defaultProps.linkText });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', defaultProps.linkHref);
        expect(link).toHaveClass('ContentSection__link');
    });

    it('renders the image with correct src, alt, and BEM class', () => {
        render(<ContentSection {...defaultProps} />);
        const img = screen.getByAltText(
            defaultProps.imageAlt!
        ) as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain(defaultProps.imageSrc);
        expect(img).toHaveClass('ContentSection__image');
    });

    it('applies the image-left modifier when imagePosition is left', () => {
        const { container } = render(
            <ContentSection {...defaultProps} imagePosition="left" />
        );
        const section = container.firstChild as HTMLElement;
        expect(section).toHaveClass(
            'ContentSection',
            'ContentSection--image-left'
        );
    });

    it('does not apply the image-left modifier by default', () => {
        const { container } = render(<ContentSection {...defaultProps} />);
        const section = container.firstChild as HTMLElement;
        expect(section).toHaveClass('ContentSection');
        expect(section).not.toHaveClass('ContentSection--image-left');
    });
});
