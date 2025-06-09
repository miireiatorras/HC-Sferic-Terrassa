import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { ImageScrollGallery } from './ImageScrollGallery';

describe('ImageScrollGallery component', () => {
    const images = ['1.png', '2.png', '3.png'];

    it('renders all images passed via props', () => {
        render(<ImageScrollGallery images={images} />);
        const renderedImages = screen.getAllByRole('img');
        expect(renderedImages).toHaveLength(images.length);
        images.forEach((src, idx) => {
            expect(renderedImages[idx]).toHaveAttribute('src', src);
            expect(renderedImages[idx]).toHaveClass(
                'ImageScrollGallery__image'
            );
        });
    });

    it('enables/disables arrows and calls scrollBy correctly', () => {
        const { container } = render(<ImageScrollGallery images={images} />);
        const gallery = container.querySelector(
            '.ImageScrollGallery__container'
        ) as HTMLElement;
        Object.defineProperty(gallery, 'clientWidth', {
            value: 100,
            configurable: true,
        });
        Object.defineProperty(gallery, 'scrollWidth', {
            value: 300,
            configurable: true,
        });
        gallery.scrollLeft = 0;
        gallery.scrollBy = vi.fn();

        fireEvent.scroll(gallery);

        const rightArrow = container.querySelector(
            '.ImageScrollGallery__arrow--right'
        ) as HTMLElement;
        const leftArrow = container.querySelector(
            '.ImageScrollGallery__arrow--left'
        ) as HTMLElement;

        expect(leftArrow).toHaveClass('ImageScrollGallery__arrow--disabled');
        expect(rightArrow).not.toHaveClass(
            'ImageScrollGallery__arrow--disabled'
        );

        fireEvent.click(rightArrow);
        expect(gallery.scrollBy).toHaveBeenCalledWith({
            left: gallery.clientWidth,
            behavior: 'smooth',
        });

        gallery.scrollLeft = gallery.scrollWidth - gallery.clientWidth;
        fireEvent.scroll(gallery);

        expect(rightArrow).toHaveClass('ImageScrollGallery__arrow--disabled');
        expect(leftArrow).not.toHaveClass(
            'ImageScrollGallery__arrow--disabled'
        );

        fireEvent.click(leftArrow);
        expect(gallery.scrollBy).toHaveBeenCalledWith({
            left: -gallery.clientWidth,
            behavior: 'smooth',
        });
    });
});
