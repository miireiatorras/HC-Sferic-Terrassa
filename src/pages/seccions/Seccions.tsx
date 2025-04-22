import { Banner } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { ContentSection, Stat } from '@/ui/content-section/ContentSection';
import Footer from '@/features/footer/Footer';

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
            <Banner variant="seccions" />
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
            <Footer />
        </div>
    );
};
