import type { Meta, StoryObj } from '@storybook/react';
import './Equips.scss';
import { TeamCard } from '@/ui/team-card/TeamCard';
import { Accordion } from '@/ui/accordion/Accordion';

const meta: Meta = {
    title: 'Sferic/Equips',
    component: TeamCard,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const sampleTeams = [
    {
        imageSrc: '/images/team1.jpg',
        title: 'Prebenjamí',
        members: [
            'Ivet Esteve',
            'Marina Sans',
            'Èlia',
            'Adrián',
            'Guillem Giménez',
        ],
    },
    {
        imageSrc: '/images/team2.jpg',
        title: 'Benjamí',
        members: ['Roger Bosch', 'Laia Puig', 'Mariona Vives'],
    },
    {
        imageSrc: '/images/team3.jpg',
        title: 'Aleví',
        members: ['Pau Font', 'Clara Roca', 'Joel Martín'],
    },
];

export const Playground: Story = {
    render: () => (
        <div className="Equips">
            <Accordion title="Iniciació">
                <div className="Equips__grid">
                    {sampleTeams.map((t, i) => (
                        <TeamCard
                            key={i}
                            imageSrc={t.imageSrc}
                            title={t.title}
                            members={t.members}
                        />
                    ))}
                </div>
            </Accordion>
            <Accordion title="Formatiu">
                <div className="Equips__grid">
                    {sampleTeams.map((t, i) => (
                        <TeamCard
                            key={i}
                            imageSrc={t.imageSrc}
                            title={t.title}
                            members={t.members}
                        />
                    ))}
                </div>
            </Accordion>
            <Accordion title="Sènior">
                <div className="Equips__grid">
                    {sampleTeams.map((t, i) => (
                        <TeamCard
                            key={i}
                            imageSrc={t.imageSrc}
                            title={t.title}
                            members={t.members}
                        />
                    ))}
                </div>
            </Accordion>
        </div>
    ),
};
