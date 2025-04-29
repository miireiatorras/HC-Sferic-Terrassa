import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';
import './ProductCard.scss';

const meta: Meta<typeof ProductCard> = {
    title: 'Sferic/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    argTypes: {
        imageSrc: { control: 'text', description: 'URL of the product image' },
        imageAlt: { control: 'text', description: 'Alt text for the image' },
        title: { control: 'text', description: 'Product title' },
        price: { control: 'text', description: 'Displayed price string' },
        subtitle: {
            control: 'text',
            description: 'Optional subtitle under price',
        },
        href: { control: 'text', description: 'If set, card becomes a link' },
        onClick: { action: 'clicked', description: 'Click handler' },
    },
};
export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        imageSrc:
            '/public/camiseta-jugador-1a-equipacion-hc-sferic-veteranos.jpg',
        imageAlt: 'Sample product',
        title: 'Faldilla SFERIC',
        price: '32€',
        subtitle: '(Impostos inclosos)',
    },
};

export const ClickableLink: Story = {
    args: {
        ...Default.args,
        href: 'https://example.com/product/123',
    },
};
