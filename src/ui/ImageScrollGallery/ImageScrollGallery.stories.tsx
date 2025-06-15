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
    '/old/antiga1.png',
    '/old/antiga2.png',
    '/old/antiga3.png',
    '/old/antiga4.png',
    '/old/antiga5.png',
];

export const Playground: Story = {
    args: {
        images: sampleImages,
    },
};
