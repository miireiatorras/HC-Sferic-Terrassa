import React from 'react';
import data from './inscripcions.json';
import './inscripcions.scss';

import { Helmet } from '@dr.pogodin/react-helmet';
import { Alert, AlertProps } from '@/ui/alert/Alert';
import { Banner } from '@/ui/banner/Banner';
import {
    PromoSection,
    PromoSectionProps,
} from '@/ui/PromoSection/PromoSection';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';

export type InscripcionsProps = BaseComponentProps;

interface SEO {
    title: string;
    description: string;
    canonical: string;
    og: {
        url: string;
        image: string;
        title: string;
        description: string;
    };
    twitter: {
        card: string;
    };
}
interface InscripcionsData {
    seo: SEO;
    bannerVariant: string;
    heading: string;
    alert: {
        icon: AlertProps['icon'];
        variant: AlertProps['variant'];
        text: string;
    };
    promoSection: PromoSectionProps & { text: string; buttonText: string };
    footerParagraph: string;
}

const {
    seo,
    bannerVariant = 'inscriu-te',
    heading = '',
    alert = { icon: 'launch', variant: 'open-in-new-tab', text: '' },
    promoSection = {
        imageSrc: '',
        imageAlt: '',
        heading: '',
        text: '',
        buttonText: '',
    },
    footerParagraph = '',
} = (data as InscripcionsData) || {};

const block = registerBlockName('Inscripcions');

export const Inscripcions: React.FC<InscripcionsProps> = (props) => {
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
                    className={toBEM({ block, element: 'Banner' })}
                />

                <Title className={toBEM({ block, element: 'Title' })}>
                    {heading}
                </Title>

                <div className={toBEM({ block, element: 'content' })}>
                    <Alert
                        icon={alert.icon}
                        variant={alert.variant}
                        className={toBEM({ block, element: 'Alert' })}
                    >
                        {alert.text}
                    </Alert>

                    <PromoSection
                        imageSrc={promoSection.imageSrc}
                        imageAlt={promoSection.imageAlt}
                        heading={promoSection.heading}
                        children={promoSection.text}
                        buttonText={promoSection.buttonText}
                    />

                    <p className={toBEM({ block, element: 'p' })}>
                        {footerParagraph}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Inscripcions;
