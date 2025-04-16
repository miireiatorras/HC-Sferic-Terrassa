import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import './Card.scss';

const meta: Meta<typeof Card> = {
    title: 'Sferic/Card',
    component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

// History: Single editable card
export const Playground: Story = {
    args: {
        number: '01',
        title: 'Qui som?',
        children: `Som un grup de gent diversa, nens i nenes, pares i mares, jugadors i exjugadors, tots apassionats per l'Hoquei Patins, pel nostre barri i per la nostra ciutat, Terrassa.`,
    },
};

// Múltiples cartes tal com apareixen a la pàgina “El Club”
export const Grid: Story = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                padding: '2rem',
                background: '#f5f5f5',
            }}
        >
            <Card number="01" title="Qui som?">
                Som un grup de gent diversa, nens i nenes, pares i mares,
                jugadors i exjugadors, tots apassionats per l'Hoquei Patins…
            </Card>
            <Card number="02" title="Què fem?">
                Tenim com a objectiu formar nens i joves, tant en la vessant
                esportiva…
            </Card>
            <Card number="03" title="Què volem?">
                Actualment som l’únic club d’Hoquei Patins de Terrassa i volem
                que us sumeu…
            </Card>
            <Card number="04" title="Com ho fem?">
                A partir d’Hoquei Patins millorem la concentració, la
                coordinació, la psicomotricitat…
            </Card>
        </div>
    ),
};
