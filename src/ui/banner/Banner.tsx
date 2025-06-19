import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Banner.scss';

export type BannerVariant =
    | 'contacte'
    | 'equips'
    | 'el-club'
    | 'botiga'
    | 'inscriu-te'
    | 'seccions'
    | 'horari';

export type BannerProps = BaseComponentProps & {
    /** Visual variant to display specific content. */
    variant: BannerVariant;
};

const block = registerBlockName('Banner');

const BANNERS: Record<
    BannerVariant,
    { title: string; subtitle: string; image: string }
> = {
    contacte: {
        title: 'Contacte',
        subtitle:
            'Contacta amb nosaltres per a qualsevol consulta i segueix de prop el nostre club!',
        image: '/banners/banner-contacte-min.webp',
    },
    equips: {
        title: 'Equips',
        subtitle:
            'Coneix els nostres equips, des de les categories més joves fins a les màximes.',
        image: '/banners/banner-equips-min.webp',
    },
    'el-club': {
        title: 'El Club',
        subtitle:
            'Des de 1952, hem estat construint una tradició d’excel·lència en hoquei patins.',
        image: '/banners/banner-el-club-min.webp',
    },
    botiga: {
        title: 'Botiga',
        subtitle:
            'Tens tot el que necessites per jugar a hoquei patins. Descobreix la nostra botiga on línia.',
        image: '/banners/banner-botiga-min.webp',
    },
    'inscriu-te': {
        title: 'Inscriu-te',
        subtitle:
            'Uneix-te a nosaltres! Inscriu‑te i forma part d’aquesta gran família d’hoquei patins.',
        image: '/banners/banner-inscriute-min.webp',
    },
    seccions: {
        title: 'Seccions',
        subtitle:
            'Explora les seccions del club i viu hoquei patins amb nosaltres.',
        image: '/banners/banner-seccions-min.webp',
    },
    horari: {
        title: 'Horari',
        subtitle:
            'Consulta els horaris d’entrenament de cada equip i vine a entrenar amb nosaltres!',
        image: '/banners/banner-horari-min.webp',
    },
};

/**
 * `Banner` is a visual component used to display a large image
 * with a title and subtitle depending on the selected variant.
 */
export const Banner = ({ variant, ...props }: BannerProps) => {
    const { title, subtitle, image } = BANNERS[variant];

    return (
        <section
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [variant],
            })}
            aria-label={`Banner: ${title}`}
        >
            <img
                src={image}
                alt={`Banner ${title} HC Sferic Terrassa`}
                className={toBEM({ block, element: 'background' })}
                decoding="async"
                fetchPriority="high"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
            <div className={toBEM({ block, element: 'overlay' })} />
            <div className={toBEM({ block, element: 'content' })}>
                <h1 className={toBEM({ block, element: 'title' })}>{title}</h1>
                <p className={toBEM({ block, element: 'subtitle' })}>
                    {subtitle}
                </p>
            </div>
        </section>
    );
};
