import React from 'react';
import data from './contacte.json';
import './Contacte.scss';

import { Helmet } from '@dr.pogodin/react-helmet';
import { Banner } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import { InfoCard } from '@/ui/info-card/InfoCard';
import { LocationMap, LocationMapProps } from '@/ui/map/LocationMap';
import {
    ContactForm,
    ContactFormProps,
} from '@/features/contact-form/ContactForm';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { IconNames } from '@/ui/Icon/Icon';

interface SEO {
    title: string;
    description: string;
    canonical: string;
    og: { url: string; image: string; title: string; description: string };
    twitter: { card: string };
}
interface ContacteData {
    seo: SEO;
    bannerVariant: string;
    locationMap: LocationMapProps;
    parlemSection: {
        title: string;
        items: Array<{ icon: IconNames; text: string }>;
    };
    readSection: {
        title: string;
        contactForm: ContactFormProps;
    };
}

const {
    seo,
    bannerVariant = 'contacte',
    locationMap,
    parlemSection,
    readSection,
} = (data as ContacteData) || {};

export type ContacteProps = BaseComponentProps;
const block = registerBlockName('Contacte');

export const Contacte: React.FC<ContacteProps> = (props) => {
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

                <Title>On ens trobem?</Title>
                <LocationMap {...locationMap} />

                <section
                    className={toBEM({ block, element: 'parlem-section' })}
                >
                    <Title
                        variant="light"
                        className={toBEM({ block, element: 'parlem-title' })}
                    >
                        {parlemSection.title}
                    </Title>
                    <div className={toBEM({ block, element: 'info-grid' })}>
                        {parlemSection.items.map((item, i) => {
                            let href = undefined;
                            let ariaLabel = undefined;
                            if (item.icon === 'email') {
                                href = `mailto:${item.text}`;
                                ariaLabel = `Enviar correo a ${item.text}`;
                            } else if (item.icon === 'call') {
                                const phone = String(item.text).match(
                                    /\+?\d[\d\s/]+/
                                );
                                href = phone
                                    ? `tel:${phone[0].replace(/\s|\//g, '')}`
                                    : undefined;
                                ariaLabel = `Llamar al teléfono ${item.text}`;
                            } else if (item.icon === 'instagram') {
                                const username = String(item.text).replace(
                                    '@',
                                    ''
                                );
                                href = `https://instagram.com/${username}`;
                                ariaLabel = `Visitar Instagram ${item.text}`;
                            }
                            return (
                                <a
                                    key={i}
                                    href={href}
                                    target={
                                        item.icon === 'instagram'
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        item.icon === 'instagram'
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    tabIndex={0}
                                    aria-label={ariaLabel}
                                    className={toBEM({
                                        block,
                                        element: 'parlem-link',
                                    })}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        display: 'block',
                                    }}
                                >
                                    <InfoCard
                                        icon={item.icon}
                                        text={<>{item.text}</>}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </section>

                <section
                    className={toBEM({ block, element: 'et-llegim-section' })}
                >
                    <Title>{readSection.title}</Title>
                    <ContactForm {...readSection.contactForm} />
                </section>
            </div>
        </>
    );
};

export default Contacte;
