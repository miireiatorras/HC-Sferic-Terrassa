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

export type BotigaProps = BaseComponentProps & {};

const block = registerBlockName('Botiga');
export const Botiga = ({ ...props }: BotigaProps) => {
    return (
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
                    Oferim material oficial de l’Hoquei SFERIC disponible a la
                    venta a la nostra botiga a Cerdanyola del Vallès. El millor
                    servei, el millor material i al millor preu. Es pot demanar
                    amb recollida a la botiga o entrega al Club. Pots aconseguir
                    la teva equipació clicant sobre les samarretes. Agafa la
                    teva!
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
                    plataforma externa Playoff. Clicant al botó "Compra Ara", et
                    redirigirà a la seva pàgina web.
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
                        imageAlt="Sample product"
                        title="Faldilla SFERIC"
                        price="32€"
                        subtitle="(Impostos inclosos)"
                        href="https://example.com/product/123"
                    />
                    <ProductCard
                        imageSrc="/camiseta-jugador-1a-equipacion-hc-sferic-veteranos.jpg"
                        imageAlt="Sample product"
                        title="Faldilla SFERIC"
                        price="32€"
                        subtitle="(Impostos inclosos)"
                        href="https://example.com/product/123"
                    />
                    <ProductCard
                        imageSrc="/camiseta-jugador-1a-equipacion-hc-sferic-veteranos.jpg"
                        imageAlt="Sample product"
                        title="Faldilla SFERIC"
                        price="32€"
                        subtitle="(Impostos inclosos)"
                        href="https://example.com/product/123"
                    />
                    <ProductCard
                        imageSrc="/camiseta-jugador-1a-equipacion-hc-sferic-veteranos.jpg"
                        imageAlt="Sample product"
                        title="Faldilla SFERIC"
                        price="32€"
                        subtitle="(Impostos inclosos)"
                        href="https://example.com/product/123"
                    />
                </div>
            </div>
            <Button
                className={toBEM({
                    block,
                    element: 'Button',
                })}
            >
                Accedeix a la nostra botiga online
            </Button>
            <Button
                className={toBEM({
                    block,
                    element: 'Button',
                })}
            >
                Accedeix a la botiga Hockey Team™
            </Button>
        </div>
    );
};
