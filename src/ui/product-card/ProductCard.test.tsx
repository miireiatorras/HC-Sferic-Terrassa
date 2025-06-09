// src/ui/product-card/ProductCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { ProductCard, Props as ProductCardProps } from './ProductCard';

describe('ProductCard component', () => {
    const defaultProps: ProductCardProps = {
        imageSrc: '/img/product.jpg',
        imageAlt: 'A cool product',
        title: 'Test Product',
        price: '32€',
        subtitle: 'Special edition',
    };

    it('renders the image with correct src and alt', () => {
        render(<ProductCard {...defaultProps} data-testid="card" />);
        const img = screen.getByAltText(
            defaultProps.imageAlt!
        ) as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain(defaultProps.imageSrc);
    });

    it('renders the title and price', () => {
        render(<ProductCard {...defaultProps} />);
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.price)).toBeInTheDocument();
    });

    it('renders the subtitle when provided', () => {
        render(<ProductCard {...defaultProps} />);
        expect(screen.getByText(defaultProps.subtitle!)).toBeInTheDocument();
    });

    it('does not render subtitle when not provided', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { subtitle, ...props } = defaultProps;
        render(<ProductCard {...props} />);
        expect(screen.queryByText(/Special edition/i)).toBeNull();
    });

    it('calls onClick handler when clicked', async () => {
        const onClick = vi.fn();
        render(
            <ProductCard
                {...defaultProps}
                onClick={onClick}
                data-testid="card"
            />
        );
        const card = screen.getByTestId('card');
        fireEvent.click(card);
        expect(onClick).toHaveBeenCalled();
    });

    it('renders as an <a> tag when href is provided', () => {
        const href = '/product/123';
        render(
            <ProductCard {...defaultProps} href={href} data-testid="card" />
        );
        const card = screen.getByTestId('card');
        expect(card.tagName).toBe('A');
        expect(card).toHaveAttribute('href', href);
    });

    it('applies BEM classes including clickable modifier', () => {
        const onClick = vi.fn();
        const { container } = render(
            <ProductCard {...defaultProps} onClick={onClick} />
        );
        const card = container.firstChild as HTMLElement;
        expect(card).toHaveClass('ProductCard');
        expect(card).toHaveClass('ProductCard--clickable');
    });
});
