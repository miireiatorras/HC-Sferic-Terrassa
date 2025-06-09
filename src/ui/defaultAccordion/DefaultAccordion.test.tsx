import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { DefaultAccordion } from './DefaultAccordion';

describe('DefaultAccordion component', () => {
    const titleText = 'Section Title';
    const contentText = 'Hidden Content';

    it('renders with content visible by default', () => {
        render(
            <DefaultAccordion title={titleText}>{contentText}</DefaultAccordion>
        );

        const headerButton = screen.getByRole('button', { name: titleText });
        expect(headerButton).toBeInTheDocument();
        expect(headerButton).toHaveClass('DefaultAccordion__header');

        const content = screen.getByText(contentText);
        expect(content).toBeInTheDocument();
        expect(content.parentElement).toHaveClass('DefaultAccordion__content');
    });

    it('toggles content visibility when header is clicked', () => {
        render(
            <DefaultAccordion title={titleText}>{contentText}</DefaultAccordion>
        );

        const headerButton = screen.getByRole('button', { name: titleText });

        fireEvent.click(headerButton);
        expect(screen.queryByText(contentText)).toBeNull();

        fireEvent.click(headerButton);
        expect(screen.getByText(contentText)).toBeInTheDocument();
    });

    it('applies the "open" modifier class when expanded and removes it when collapsed', () => {
        const { container } = render(
            <DefaultAccordion title={titleText}>{contentText}</DefaultAccordion>
        );
        const wrapper = container.firstChild as HTMLElement;

        expect(wrapper).toHaveClass('DefaultAccordion--open');

        const headerButton = screen.getByRole('button', { name: titleText });
        fireEvent.click(headerButton);
        expect(wrapper).not.toHaveClass('DefaultAccordion--open');

        fireEvent.click(headerButton);
        expect(wrapper).toHaveClass('DefaultAccordion--open');
    });
});
