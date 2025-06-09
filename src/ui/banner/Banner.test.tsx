import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Banner, BannerVariant } from './Banner';

describe('Banner component', () => {
    const BANNERS: Record<
        BannerVariant,
        { title: string; subtitle: string; image: string }
    > = {
        contacte: {
            title: 'Contacte',
            subtitle:
                'Contacta amb nosaltres per a qualsevol consulta i segueix de prop el nostre club!',
            image: '/banners/banner-contacte.jpg',
        },
        equips: {
            title: 'Equips',
            subtitle:
                'Coneix els nostres equips, des de les categories més joves fins a les màximes.',
            image: '/banners/banner-equips.jpg',
        },
        'el-club': {
            title: 'El Club',
            subtitle:
                'Des de 1952, hem estat construint una tradició d’excel·lència en hoquei patins.',
            image: '/banners/banner-el-club.jpg',
        },
        botiga: {
            title: 'Botiga',
            subtitle:
                'Tens tot el que necessites per jugar a hoquei patins. Descobreix la nostra botiga on línia.',
            image: '/banners/banner-botiga.jpg',
        },
        'inscriu-te': {
            title: 'Inscriu-te',
            subtitle:
                'Uneix-te a nosaltres! Inscriu-te i forma part d’aquesta gran família d’hoquei patins.',
            image: '/banners/banner-inscriute.jpg',
        },
        seccions: {
            title: 'Seccions',
            subtitle:
                'Explora les seccions del club i viu hoquei patins amb nosaltres.',
            image: '/banners/banner-seccions.jpg',
        },
        horari: {
            title: 'Horari',
            subtitle:
                'Consulta els horaris d’entrenament de cada equip i vine a entrenar amb nosaltres!',
            image: '/banners/banner-horari.jpg',
        },
    };

    (Object.keys(BANNERS) as BannerVariant[]).forEach((variant) => {
        const { title, subtitle, image } = BANNERS[variant];

        it(`renders correctly for variant="${variant}"`, () => {
            const { container } = render(
                <Banner variant={variant} data-testid="banner" />
            );

            const root = screen.getByTestId('banner');
            expect(root).toHaveClass('Banner', `Banner--${variant}`);

            const bg = container.querySelector(
                '.Banner__background'
            ) as HTMLElement;
            expect(bg).toBeInTheDocument();
            expect(bg).toHaveStyle(`background-image: url(${image})`);

            expect(
                container.querySelector('.Banner__overlay')
            ).toBeInTheDocument();

            const heading = screen.getByRole('heading', {
                level: 1,
                name: title,
            });
            expect(heading).toBeInTheDocument();
            expect(heading).toHaveClass('Banner__title');

            const sub = screen.getByText(subtitle);
            expect(sub).toBeInTheDocument();
            expect(sub).toHaveClass('Banner__subtitle');
        });
    });
});
