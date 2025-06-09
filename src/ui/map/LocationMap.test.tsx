import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { LocationMap, LocationMapProps } from './LocationMap';

describe('LocationMap component', () => {
    const defaultProps: LocationMapProps = {
        title: 'My Office',
        address: '123 Main St, Springfield',
        mapSrc: 'https://maps.example.com/embed?foo=bar',
    };

    it('renders the title and address with correct BEM classes', () => {
        render(<LocationMap {...defaultProps} />);

        // Title
        const heading = screen.getByRole('heading', {
            name: defaultProps.title,
        });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('LocationMap__title');

        // Address
        const address = screen.getByText(defaultProps.address);
        expect(address).toBeInTheDocument();
        expect(address).toHaveClass('LocationMap__address');
    });

    it('renders the icon wrapper and icon element', () => {
        render(<LocationMap {...defaultProps} />);

        const iconWrapper = document.querySelector(
            '.LocationMap__icon-wrapper'
        );
        expect(iconWrapper).toBeInTheDocument();

        const icon = iconWrapper?.querySelector('.LocationMap__icon');
        expect(icon).toBeInTheDocument();
    });

    it('renders the map iframe with correct src and title', () => {
        render(<LocationMap {...defaultProps} />);

        const mapContainer = document.querySelector('.LocationMap__map');
        expect(mapContainer).toBeInTheDocument();

        const iframe = mapContainer?.querySelector(
            'iframe'
        ) as HTMLIFrameElement;
        expect(iframe).toBeInTheDocument();
        expect(iframe.src).toContain(defaultProps.mapSrc);
        expect(iframe).toHaveAttribute('title', `Map of ${defaultProps.title}`);
        expect(iframe).toHaveAttribute('aria-hidden', 'false');
        expect(iframe).toHaveAttribute('tabindex', '0');
    });
});
