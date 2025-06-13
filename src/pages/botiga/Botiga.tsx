import React from 'react';
import botigaDataJson from './botiga.json';
import './Botiga.scss';
import {
    ShopPartnerBanner,
    ShopPartnerBannerProps,
} from '@/features/shopPartnerBanner/ShopPartnerBanner';
import { Banner } from '@/ui/banner/Banner';
import type { BannerVariant } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { Alert, AlertProps } from '@/ui/alert/Alert';
import { ProductCard, ProductCardProps } from '@/ui/product-card/ProductCard';
import { Button, ButtonProps } from '@/ui/button/Button';
import { Helmet } from '@dr.pogodin/react-helmet';
import { NavLink } from 'react-router-dom';

interface BotigaData {
    bannerVariant?: BannerVariant;
    header?: string;
    shopPartnerBanner?: ShopPartnerBannerProps;
    paragraphs?: string[];
    alert?: {
        variant?: AlertProps['variant'];
        icon?: AlertProps['icon'];
        text?: string;
    };
    productsSection?: {
        heading?: string;
        subheading?: string;
        products?: ProductCardProps[];
        buttons?: Array<{
            text: string;
            href: string;
            variant?: ButtonProps<object>['variant'];
        }>;
    };
}

const {
    bannerVariant = 'botiga',
    header = '',
    shopPartnerBanner = {
        logoSrc: '',
        title: '',
        items: [],
        reviewsLabel: '',
        rating: 0,
    } as ShopPartnerBannerProps,
    paragraphs = [],
    alert = { variant: 'info', icon: 'launch', text: '' },
    productsSection = {
        heading: '',
        subheading: '',
        products: [],
        buttons: [],
    },
} = (botigaDataJson as BotigaData) || {};

const {
    heading: productsHeading = '',
    subheading: productsSubheading = '',
    products = [],
    buttons = [],
} = productsSection;

export type BotigaProps = BaseComponentProps;
const block = registerBlockName('Botiga');

export const Botiga: React.FC<BotigaProps> = (props) => {
    const description = `${header} del HC SFERIC Terrassa. Compra roba esportiva, equipació i accessoris oficials.`;

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>HC SFERIC Terrassa – Botiga</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://sfericok.cat/botiga" />

                <meta property="og:url" content="https://sfericok.cat/botiga" />
                <meta property="og:image" content="/logo-tranp-negre.png" />
                <meta
                    property="og:title"
                    content="HC SFERIC Terrassa – Botiga"
                />
                <meta property="og:description" content={description} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div {...getBaseComponentProps({ ...props, block })}>
                <Banner variant={bannerVariant} />

                <Title>{header}</Title>

                <div className={toBEM({ block, element: 'main-content' })}>
                    <ShopPartnerBanner
                        {...shopPartnerBanner}
                        className="shop-partner-banner"
                    />

                    {paragraphs.map((txt, i) => (
                        <p key={i} className={toBEM({ block, element: 'p' })}>
                            {txt}
                        </p>
                    ))}

                    <Alert variant={alert.variant} icon={alert.icon}>
                        {alert.text}
                    </Alert>

                    <div
                        className={toBEM({
                            block,
                            element: 'products-section',
                        })}
                    >
                        <h2>{productsHeading}</h2>
                        <p>{productsSubheading}</p>

                        <div className={toBEM({ block, element: 'products' })}>
                            {products.map((prod, i) => (
                                <ProductCard key={i} {...prod} />
                            ))}
                        </div>

                        <div
                            className={toBEM({
                                block,
                                element: 'buttons-wrapper',
                            })}
                        >
                            {buttons.map((btn, i) => (
                                <Button
                                    key={i}
                                    as={NavLink}
                                    to={btn.href}
                                    variant={btn.variant}
                                    className={toBEM({
                                        block,
                                        element: 'Button',
                                    })}
                                >
                                    {btn.text}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Botiga;
