import type { Meta, StoryObj } from '@storybook/react';
import { ImageScrollGallery } from './ImageScrollGallery';
import './ImageScrollGalery.scss';

const meta: Meta<typeof ImageScrollGallery> = {
    title: 'Sferic/UI/ImageScrollGallery',
    component: ImageScrollGallery,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ImageScrollGallery>;

const sampleImages = [
    '/old/antiga1.webp',
    '/old/antiga2.webp',
    '/old/antiga3.webp',
    '/old/antiga4.webp',
    '/old/antiga5.webp',
];

export const Playground: Story = {
    args: {
        images: sampleImages,
    },
};
