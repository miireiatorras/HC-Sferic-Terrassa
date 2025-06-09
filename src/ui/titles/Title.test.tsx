import { vi } from 'vitest';
vi.mock('react-intersection-observer', () => ({
    useInView: () => ({
        ref: vi.fn(),
        inView: true,
    }),
}));

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Title, TitleProps } from './Title';

describe('Title component', () => {
    const defaultProps: TitleProps = {
        children: 'Hello World',
    };

    it('renders the children inside an h2 and applies BEM classes', () => {
        render(<Title data-testid="root">{defaultProps.children}</Title>);
        const root = screen.getByTestId('root');
        // Wrapper should have block and default modifier class
        expect(root).toHaveClass('Title', 'Title--default');

        // The bar element
        const bar = root.querySelector('.Title__bar');
        expect(bar).toBeInTheDocument();

        // The heading element
        const heading = screen.getByRole('heading', {
            level: 2,
            name: String(defaultProps.children),
        });
        expect(heading).toHaveClass('Title__title');
    });

    it('applies the "light" variant modifier when specified', () => {
        render(
            <Title variant="light" data-testid="light">
                Light Mode
            </Title>
        );
        const lightRoot = screen.getByTestId('light');
        expect(lightRoot).toHaveClass('Title', 'Title--light');
    });
});
