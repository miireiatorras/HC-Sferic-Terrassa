import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PromoSection, Props as PromoSectionProps } from './PromoSection';
import './PromoSection.scss';

const meta: Meta<typeof PromoSection> = {
    title: 'Sferic/PromoSection',
    component: PromoSection,
    tags: ['autodocs'],
    argTypes: {
        imageSrc: { control: 'text', description: 'URL of the top image' },
        imageAlt: { control: 'text', description: 'Alt text for the image' },
        heading: { control: 'text', description: 'Main heading text' },
        children: {
            control: 'text',
            description: 'Body content of the section',
        },
        buttonText: { control: 'text', description: 'CTA button label' },
        onButtonClick: {
            action: 'clicked',
            description: 'Click handler for button',
        },
        buttonHref: {
            control: 'text',
            description: 'If set, renders the button as a link',
        },
    },
};
export default meta;

type Story = StoryObj<typeof PromoSection>;

export const Default: Story = {
    args: {
        imageSrc: '/public/inscripcions-full.png',
        imageAlt: 'Season 2024-2025 Flyer',
        heading:
            'Ja estan OBERTES les inscripcions de la TEMPORADA 2025-2026 🎉!',
        children:
            'No et quedis fora! Uneix-te a la família Sferic Hoquei Patins Terrassa i viu la passió de l’hoquei en un ambient únic, amb els millors entrenadors i companys 💪',
        buttonText: "Apunta't ara!",
    },
};

export const ClickableLink: Story = {
    args: {
        ...Default.args,
        buttonHref: 'https://sfericok.cat/inscripcions',
    } as PromoSectionProps,
};

export const WithClickHandler: Story = {
    args: {
        ...Default.args,
        onButtonClick: action('sign-up-clicked'),
    } as PromoSectionProps,
};
