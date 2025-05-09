import { Alert } from '@/ui/alert/Alert';
import { Banner } from '@/ui/banner/Banner';
import { PromoSection } from '@/ui/PromoSection/PromoSection';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';

import './inscripcions.scss';
export type InscripcionsProps = BaseComponentProps & {};

const block = registerBlockName('Inscripcions');
export const Inscripcions = ({ ...props }: InscripcionsProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner
                variant="inscriu-te"
                className={toBEM({
                    block,
                    element: 'Banner',
                })}
            />
            <Title
                className={toBEM({
                    block,
                    element: 'Title',
                })}
            >
                Apunta't i gaudeix del nostre club
            </Title>
            <Alert
                icon="launch"
                variant="open-in-new-tab"
                className={toBEM({
                    block,
                    element: 'Alert',
                })}
            >
                Les inscripcions es gestionen a través de la plataforma PlayOff.
                Clicant el botó, s’accedeix al formulari que s’ha de realitzar
                per apuntar-te al club i gaudir de tots els seus adavantages.
            </Alert>
            <PromoSection
                imageSrc="/inscripcions-full.png"
                imageAlt="Season 2024-2025 Flyer"
                heading="Ja estan OBERTES les inscripcions de la TEMPORADA 2025-2026 🎉!"
                children="No et quedis fora! Uneix-te a la família Sferic Hoquei Patins Terrassa i viu la passió de l’hoquei en un ambient únic amb els millors entrenadors i companys 💪"
                buttonText="Apunta't ara!"
                buttonHref="https://sfericok.cat/inscripcions"
            />
            <p
                className={toBEM({
                    block,
                    element: 'p',
                })}
            >
                VENIU A GAUDIR DE L’HOQUEI PATINS!!! #SomSFERIC #ORGULLVERD
            </p>
        </div>
    );
};
