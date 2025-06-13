import React, { useState } from 'react';
import data from './horari.json';
import './Horari.scss';

import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { Schedule, ScheduleEvent } from '@/ui/schedule/Schedule';
import { ScheduleLegend } from '@/features/schedule-legend/ScheduleLegend';
import { Icon, IconNames } from '@/ui/Icon/Icon';
import { Banner } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import { Helmet } from '@dr.pogodin/react-helmet';

interface SEO {
    title: string;
    description: string;
    canonical: string;
    og: { url: string; image: string; title: string; description: string };
    twitter: { card: string };
}

interface HorariData {
    seo: SEO;
    bannerVariant: string;
    heading: string;
    days: string[];
    events: ScheduleEvent[];
    filterOptions: Array<{ value: string; label: string }>;
    actions: Array<
        | { type: 'button'; icon: IconNames; text: string }
        | {
              type: 'link';
              icon: IconNames;
              text: string;
              href: string;
              download: string;
          }
    >;
}

const { seo, bannerVariant, heading, days, events, filterOptions, actions } =
    data as HorariData;

export type HorariProps = BaseComponentProps;
const block = registerBlockName('Horari');

export const Horari: React.FC<HorariProps> = (props) => {
    const [filter, setFilter] = useState<'all' | ScheduleEvent['category']>(
        'all'
    );
    const filteredEvents =
        filter === 'all' ? events : events.filter((e) => e.category === filter);

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="canonical" href={seo.canonical} />

                <meta property="og:url" content={seo.og.url} />
                <meta property="og:image" content={seo.og.image} />
                <meta property="og:title" content={seo.og.title} />
                <meta property="og:description" content={seo.og.description} />
                <meta name="twitter:card" content={seo.twitter.card} />
            </Helmet>

            <div {...getBaseComponentProps({ ...props, block })}>
                <Banner
                    variant={
                        bannerVariant as React.ComponentProps<
                            typeof Banner
                        >['variant']
                    }
                />
                <Title>{heading}</Title>

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
                            id="horari-filter"
                            value={filter}
                            onChange={(e) =>
                                setFilter(
                                    e.target.value as
                                        | ScheduleEvent['category']
                                        | 'all'
                                )
                            }
                        >
                            {filterOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={toBEM({ block, element: 'actions' })}>
                        {actions.map((act, i) =>
                            act.type === 'button' ? (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => window.print()}
                                    className={toBEM({
                                        block,
                                        element: 'btn-imprimir',
                                    })}
                                >
                                    <Icon icon={act.icon} size="md" />{' '}
                                    {act.text}
                                </button>
                            ) : (
                                <a
                                    key={i}
                                    href={act.href}
                                    download={act.download}
                                    className={toBEM({ block, element: 'btn' })}
                                >
                                    <Icon icon={act.icon} size="md" />{' '}
                                    {act.text}
                                </a>
                            )
                        )}
                    </div>
                </div>

                <Schedule days={days} events={filteredEvents} />
                <ScheduleLegend />
            </div>
        </>
    );
};

export default Horari;
