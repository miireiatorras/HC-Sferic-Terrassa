import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import './Horari.scss';
import Title from '@/ui/titles/Title';
import { Banner } from '@/ui/banner/Banner';
export type HorariProps = BaseComponentProps & {};
import { Schedule, ScheduleEvent } from '@/ui/schedule/Schedule';
import { ScheduleLegend } from '@/features/schedule-legend/ScheduleLegend';
import { Icon } from '@/ui/Icon/Icon';
import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

const days = [
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte',
    'Diumenge',
];
const events: ScheduleEvent[] = [
    {
        day: 'Dilluns',
        start: '14:00',
        end: '17:30',
        label: 'ESCOLA – PORTERS',
        category: 'iniciacio',
    },
    {
        day: 'Dilluns',
        start: '19:00',
        end: '20:30',
        label: 'JUVENIL – SÈNIORS MASCULINS A I B',
        category: 'formatiu',
    },
    {
        day: 'Dilluns',
        start: '20:30',
        end: '22:00',
        label: 'SÈNIOR FEMENÍ + SÈNIOR MASCULÍ A',
        category: 'senior',
    },
    {
        day: 'Dimecres',
        start: '14:00',
        end: '17:30',
        label: 'ESCOLA – PREBENJAMÍ (PISTA EXTERIOR)',
        category: 'formatiu',
    },
    {
        day: 'Dimecres',
        start: '19:00',
        end: '20:30',
        label: 'JUVENIL – SÈNIORS MASCULINS A I B',
        category: 'senior',
    },
    {
        day: 'Dimecres',
        start: '22:00',
        end: '23:30',
        label: 'SÈNIOR FEMENÍ + SÈNIOR MASCULÍ A',
        category: 'senior',
    },
    {
        day: 'Dijous',
        start: '17:30',
        end: '18:30',
        label: 'ESCOLA',
        category: 'iniciacio',
    },
    {
        day: 'Dijous',
        start: '17:30',
        end: '19:00',
        label: 'PREBENJAMÍ – BENJAMÍ',
        category: 'iniciacio',
    },
    {
        day: 'Divendres',
        start: '14:00',
        end: '17:30',
        label: 'PREBENJAMÍ (PISTA EXTERIOR)',
        category: 'formatiu',
    },
    {
        day: 'Dissabte',
        start: '09:00',
        end: '23:30',
        label: 'PARTITS',
        category: 'partit',
    },
    {
        day: 'Diumenge',
        start: '09:00',
        end: '14:00',
        label: 'PARTITS',
        category: 'partit',
    },
];

const block = registerBlockName('Horari');
export const Horari = ({ ...props }: HorariProps) => {
    const [filter, setFilter] = useState<'all' | ScheduleEvent['category']>(
        'all'
    );

    const filteredEvents =
        filter === 'all' ? events : events.filter((e) => e.category === filter);
    const description = `Descobreix tots els equips del HC SFERIC Terrassa: iniciació, formació i sèniors. Consulta jugadors, fotos i detalls de cada categoria.`;

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>HC SFERIC Terrassa – Horari</title>
                <meta name="description" content={description} />

                <link rel="canonical" href="https://sfericok.cat/horari" />

                <meta property="og:image" content="/logo-tranp-negre.png" />
                <meta
                    property="og:image"
                    content="https://sfericok.cat/preview-horari.png"
                />
                <meta
                    property="og:title"
                    content="HC SFERIC Terrassa – Horari"
                />
                <meta property="og:description" content={description} />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div {...getBaseComponentProps({ ...props, block })}>
                <Banner variant="horari" />
                <Title>Entrena amb nosaltres! </Title>
                <div className={toBEM({ block, element: 'controls' })}>
                    <div className={toBEM({ block, element: 'filter' })}>
                        <Icon icon="filter" size="md" />
                        <label
                            htmlFor="horari-filter"
                            className={toBEM({ block, element: 'label' })}
                        >
                            Filtra per categoria
                        </label>
                        <select
                            value={filter}
                            onChange={(e) =>
                                setFilter(
                                    e.target.value as
                                        | ScheduleEvent['category']
                                        | 'all'
                                )
                            }
                        >
                            <option value="all">Tots els equips</option>
                            <option value="iniciacio">Iniciació</option>
                            <option value="formatiu">Formatiu</option>
                            <option value="senior">Sènior</option>
                        </select>
                    </div>
                    <div className={toBEM({ block, element: 'actions' })}>
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className={toBEM({
                                block,
                                element: 'btn-imprimir',
                            })}
                        >
                            <Icon icon="printer" size="md" /> Imprimir
                        </button>
                        <a
                            href="/horario_semanal.pdf"
                            download="Horari-SFERIC-24-25.pdf"
                            className={toBEM({ block, element: 'btn' })}
                        >
                            <Icon icon="download" size="md" /> PDF
                        </a>
                    </div>
                </div>
                <Schedule days={days} events={filteredEvents} />
                <ScheduleLegend />
            </div>
        </>
    );
};
