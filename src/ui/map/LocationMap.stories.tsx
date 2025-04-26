import type { Meta, StoryObj } from '@storybook/react';
import { LocationMap } from './LocationMap';

const meta: Meta<typeof LocationMap> = {
    title: 'Sferic/LocationMap',
    component: LocationMap,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'Título que aparece encima de la dirección',
        },
        address: {
            control: 'text',
            description: 'Dirección que se muestra junto al icono',
        },
        mapSrc: {
            control: 'text',
            description: 'URL de embed de Google Maps',
        },
    },
};
export default meta;

type Story = StoryObj<typeof LocationMap>;

export const Default: Story = {
    args: {
        title: 'Pavelló Municipal de “La Maurina”',
        address: 'Carrer Sardenya, 34, Terrassa, 08224 Barcelona',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.673804104774!2d1.990687675927687!3d41.56304037127805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49298cca97331%3A0xbd289a3e7def4d19!2sPolideportivo%20Municipal%20La%20Maurina!5e1!3m2!1ses!2ses!4v1745516807393!5m2!1ses!2ses',
    },
};
