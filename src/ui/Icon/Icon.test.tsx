import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

vi.mock('icomoon-react', () => {
    return {
        __esModule: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        default: ({ icon, className, style, ...rest }: any) => (
            <svg
                data-testid={`icomoon-${icon}`}
                className={className}
                style={style}
                {...rest}
            />
        ),
    };
});

import { Icon } from './Icon';

describe('Icon component', () => {
    const ICON_NAME = 'location_on';

    it('renders the IcomoonReact component with the correct icon name', () => {
        render(<Icon icon={ICON_NAME} />);
        const svg = screen.getByTestId(`icomoon-${ICON_NAME}`);
        expect(svg).toBeInTheDocument();
    });

    it('applies the BEM block class', () => {
        render(<Icon icon={ICON_NAME} data-testid="icon" />);
        const icon = screen.getByTestId('icon');
        expect(icon).toHaveClass('Icon');
    });

    it('adds the size modifier class when size prop is provided', () => {
        render(<Icon icon={ICON_NAME} size="md" data-testid="icon-sm" />);
        const icon = screen.getByTestId('icon-sm');
        expect(icon).toHaveClass('Icon', 'Icon--md');
    });

    it('forwards arbitrary props to the rendered element', () => {
        render(
            <Icon
                icon={ICON_NAME}
                aria-label="location icon"
                data-testid="icon-props"
            />
        );
        const icon = screen.getByTestId('icon-props');
        expect(icon).toHaveAttribute('title', 'my-icon');
        expect(icon).toHaveAttribute('aria-label', 'location icon');
    });

    it('always includes the style fill=currentColor', () => {
        render(<Icon icon={ICON_NAME} data-testid="icon-style" />);
        const icon = screen.getByTestId('icon-style');
        expect(icon).toHaveStyle({ fill: 'currentColor' });
    });
});
