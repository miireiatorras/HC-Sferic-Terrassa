import { ShopPartnerBanner } from '@/features/shopPartnerBanner/ShopPartnerBanner';
import { Banner } from '@/ui/banner/Banner';
import './Botiga.scss';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { Alert } from '@/ui/alert/Alert';
import { ProductCard } from '@/ui/product-card/ProductCard';
import { Button } from '@/ui/button/Button';
import { Helmet } from '@dr.pogodin/react-helmet';

export type BotigaProps = BaseComponentProps & {};

const block = registerBlockName('Botiga');
export const Botiga = ({ ...props }: BotigaProps) => {
    const description = `Compra el material oficial del HC SFERIC Terrassa: roba esportiva, equipació i accessoris disponibles en línia o a la nostra botiga col·laboradora de Cerdanyola del Vallès.`;

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>HC SFERIC Terrassa – Botiga</title>
                <meta name="description" content={description} />

                <link
                    rel="canonical"
                    href="https://oksfericterrassa.netlify.app/botiga"
                />

                <meta
                    property="og:url"
                    content="https://oksfericterrassa.netlify.app/botiga"
                />
                <meta
                    property="og:image"
                    content="https://oksfericterrassa.netlify.app/preview-botiga.png"
                />
                <meta
                    property="og:title"
                    content="HC SFERIC Terrassa – Botiga"
                />
                <meta property="og:description" content={description} />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div {...getBaseComponentProps({ ...props, block })}>
                <Banner variant="botiga" />
                <Title>Compra aquí el nostre material!</Title>
                <div
                    className={toBEM({
                        block,
                        element: 'main-content',
                    })}
                >
                    <ShopPartnerBanner
                        logoSrc="/logos-sponsors/hockeyteam-logo.png"
                        logoAlt="Hockey Team logo"
                        title="Botiga col·laboradora de material oficial"
                        items={[
                            'Material de qualitat premium',
                            'Roba esportiva per a professionals',
                        ]}
                        reviewsLabel="Opinions verificades"
                        rating={5}
                        className="shop-partner-banner"
                    />
                    <p
                        className={toBEM({
                            block,
                            element: 'p',
                        })}
                    >
                        Oferim material oficial de l’Hoquei SFERIC disponible a
                        la venta a la nostra botiga a Cerdanyola del Vallès. El
                        millor servei, el millor material i al millor preu. Es
                        pot demanar amb recollida a la botiga o entrega al Club.
                        Pots aconseguir la teva equipació clicant sobre les
                        samarretes. Agafa la teva!
                    </p>

                    <p
                        className={toBEM({
                            block,
                            element: 'p',
                        })}
                    >
                        Per a demanar mitjetes, estics i/o buff’s, o si tens
                        material que no utilitzes, contacta’ns!
                    </p>
                    <Alert variant="open-in-new-tab" icon="launch">
                        {' '}
                        El material està disponible a la venta a través de la
                        plataforma externa Playoff. Clicant al botó "Compra
                        Ara", et redirigirà a la seva pàgina web.
                    </Alert>
                    <h2>
                        Productes populars de Hockey Team™ i de la nostra botiga
                        online
                    </h2>
                    <p>Consulta aquí els nostres productes destacats</p>
                    <div
                        className={toBEM({
                            block,
                            element: 'products',
                        })}
                    >
                        <ProductCard
                            imageSrc="/camiseta-jugador-1a-equipacion-hc-sferic-veteranos.jpg"
                            imageAlt="Samarreta jugador 1a equipació"
                            title="Faldilla SFERIC"
                            price="32€"
                            subtitle="(Impostos inclosos)"
                            href="https://hockeyteam.es/es/hc-sferic-terrassa/1406-584926-camiseta-jugador-1a-equipacion-hc-sferic-veteranos.html#/80-talla-s"
                        />
                        <ProductCard
                            imageSrc="/camiseta-portero-hc-castellar.jpg"
                            imageAlt="Samarreta porter"
                            title="Samarreta porter"
                            price="32€"
                            subtitle="(Impostos inclosos)"
                            href="https://hockeyteam.es/es/hc-sferic-terrassa/1360-584074-camiseta-portero-hc-castellar.html#/80-talla-s"
                        />
                        <ProductCard
                            imageSrc="/faldilla-jugadora-hc-castellar.jpg"
                            imageAlt="Faldilla SFERIC"
                            title="Faldilla SFERIC"
                            price="32€"
                            subtitle="(Impostos inclosos)"
                            href="https://hockeyteam.es/es/hc-sferic-terrassa/1361-584083-faldilla-jugadora-hc-castellar.html#/80-talla-s"
                        />
                        <ProductCard
                            imageSrc="/mitjons.png"
                            imageAlt="Mitjeta SFERIC"
                            title="Mitjeta SFERIC"
                            price="11€"
                            subtitle="(Impostos inclosos)"
                            href="https://sfericok.playoffinformatica.com/Botiga.php"
                        />
                        <ProductCard
                            imageSrc="/sticks.png"
                            imageAlt={'Sticks SFERIC'}
                            title="Sticks SFERIC"
                            price="41,14€"
                            subtitle="(Impostos inclosos)"
                            href="https://sfericok.playoffinformatica.com/Botiga.php"
                        />
                    </div>
                </div>
                <div
                    className={toBEM({
                        block,
                        element: 'buttons-wrapper',
                    })}
                >
                    <Button
                        variant="primary-green"
                        className={toBEM({
                            block,
                            element: 'Button',
                        })}
                    >
                        Accedeix a la nostra botiga online
                    </Button>
                    <Button
                        variant="secondary-green"
                        className={toBEM({
                            block,
                            element: 'Button',
                        })}
                    >
                        Accedeix a la botiga Hockey Team™
                    </Button>
                </div>
            </div>
        </>
    );
};
