import type { Meta, StoryObj } from '@storybook/react';
import './Equips.scss';
import { TeamCard } from '@/ui/team-card/TeamCard';
import { DefaultAccordion } from '@/ui/defaultAccordion/DefaultAccordion';

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
            <DefaultAccordion title="Iniciació">
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
            </DefaultAccordion>
            <DefaultAccordion title="Formatiu">
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
            </DefaultAccordion>
            <DefaultAccordion title="Sènior">
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
            </DefaultAccordion>
        </div>
    ),
};
