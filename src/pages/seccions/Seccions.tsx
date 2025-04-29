import { Banner } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import './Seccions.scss';
import { ContentSection, Stat } from '@/ui/content-section/ContentSection';
import Footer from '@/features/footer/Footer';
import { Button } from '@/ui/button/Button';

export type SeccionsProps = BaseComponentProps & {};

const block = registerBlockName('Seccions');
export const Seccions = ({ ...props }: SeccionsProps) => {
    const schoolStats: Stat[] = [
        { icon: 'trophy', value: '3‑6', label: 'Anys d’edat' },
        { icon: 'hockey-stick', label: 'Categoria Escola' },
        { icons: ['female', 'male'], label: 'Equips mixtos' },
    ];

    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner
                variant="seccions"
                className={toBEM({
                    block,
                    element: 'Banner',
                })}
            />{' '}
            <Title>Consulta les diferents seccions d'hoquei que tenim</Title>
            <ContentSection
                title="Escola hoquei patins"
                description={
                    <>
                        <p>
                            Aprenen a patinar i a utilitzar l’estic i la bola
                            mentre desenvolupen les habilitats bàsiques de
                            l’hoquei patins. Es treballen aspectes tècnics com
                            l’equilibri, la coordinació i l’agilitat, i es
                            fomenten valors com el respecte, l’esforç, el
                            treball en equip i l’autosuperació.
                        </p>
                        <p>
                            Mitjançant el joc dirigit, adquireixen hàbits i
                            coneixements essencials per a la pràctica de
                            l’hoquei patins.
                        </p>
                    </>
                }
                stats={schoolStats}
                linkText="Consultar equips"
                linkHref="/equips"
                imageSrc="/banners/presentacio-nen.jpg"
                imagePosition="right"
            />
            <ContentSection
                title="Hoquei formatiu"
                description={
                    <>
                        <p>
                            Aprenen a patinar i a utilitzar l’estic i la bola
                            mentre desenvolupen les habilitats bàsiques de
                            l’hoquei patins. Es treballen aspectes tècnics com
                            l’equilibri, la coordinació i l’agilitat, i es
                            fomenten valors com el respecte, l’esforç, el
                            treball en equip i l’autosuperació.
                        </p>
                        <p>
                            Mitjançant el joc dirigit, adquireixen hàbits i
                            coneixements essencials per a la pràctica de
                            l’hoquei patins.
                        </p>
                    </>
                }
                stats={schoolStats}
                linkText="Consultar equips"
                linkHref="/equips"
                imageSrc="/DSC_7420.jpg"
                imagePosition="left"
            />
            <ContentSection
                title="Hoquei competició"
                description={
                    <>
                        <p>
                            Aprenen a patinar i a utilitzar l’estic i la bola
                            mentre desenvolupen les habilitats bàsiques de
                            l’hoquei patins. Es treballen aspectes tècnics com
                            l’equilibri, la coordinació i l’agilitat, i es
                            fomenten valors com el respecte, l’esforç, el
                            treball en equip i l’autosuperació.
                        </p>
                        <p>
                            Mitjançant el joc dirigit, adquireixen hàbits i
                            coneixements essencials per a la pràctica de
                            l’hoquei patins.
                        </p>
                    </>
                }
                stats={schoolStats}
                linkText="Consultar equips"
                linkHref="/equips"
                imageSrc="/DSC_7353.jpg"
                imagePosition="right"
            />
            <div
                className={toBEM({
                    block,
                    element: 'gradient',
                })}
            >
                <h2
                    className={toBEM({
                        block,
                        element: 'h2',
                    })}
                >
                    Prepara't per unir-te a HC. SFERIC Terrassa?
                </h2>
                <p
                    className={toBEM({
                        block,
                        element: 'p',
                    })}
                >
                    Tant si tot just comences com si vols competir al més alt
                    nivell, tenim un programa perfecte per a tu.
                </p>
                <div
                    className={toBEM({
                        block,
                        element: 'buttons-container',
                    })}
                >
                    <Button
                        className={toBEM({
                            block,
                            element: 'Button',
                        })}
                    >
                        Uneix-te al club
                    </Button>
                    <Button
                        className={toBEM({
                            block,
                            element: 'Button',
                        })}
                    >
                        Consulta horari d’entrenaments{' '}
                    </Button>
                </div>
            </div>
            <Footer
                className={toBEM({
                    block,
                    element: 'Footer',
                })}
            />
        </div>
    );
};
