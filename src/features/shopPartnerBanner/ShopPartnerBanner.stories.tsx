import type { Meta, StoryObj } from '@storybook/react';
import {
    ShopPartnerBanner,
    ShopPartnerBannerProps as ShopPartnerBannerProps,
} from './ShopPartnerBanner';
import './ShopPartnerBanner.scss';

const meta: Meta<typeof ShopPartnerBanner> = {
    title: 'Sferic/ShopPartnerBanner',
    component: ShopPartnerBanner,
    tags: ['autodocs'],
    argTypes: {
        logoSrc: { control: 'text', description: 'Logo image URL' },
        logoAlt: { control: 'text', description: 'Alt text for logo' },
        title: { control: 'text', description: 'Main heading text' },
        items: {
            control: 'object',
            description: 'Array of bullet point strings',
        },
        reviewsLabel: {
            control: 'text',
            description: 'Label above the star rating',
        },
        rating: {
            control: { type: 'number', min: 0, max: 5 },
            description: 'Number of filled stars (0–5)',
        },
    },
};
export default meta;

type Story = StoryObj<typeof ShopPartnerBanner>;

export const Playground: Story = {
    args: {
        logoSrc: '/logos-sponsors/hockeyteam-logo.png',
        logoAlt: 'Hockey Team logo',
        title: 'Botiga col·laboradora de material oficial',
        items: [
            'Material de qualitat premium',
            'Roba esportiva per a professionals',
        ],
        reviewsLabel: 'Opinions verificades',
        rating: 5,
    } as ShopPartnerBannerProps,
};
