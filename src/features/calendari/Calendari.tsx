import { Button } from '@/ui/button/Button';
import Title from '@/ui/titles/Title';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type CaldendariProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Caldendari');
export const Caldendari = ({ ...props }: CaldendariProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <section
                className={toBEM({
                    block,
                    element: 'section',
                })}
            >
                <Title>Calendari partits</Title>
                <p>
                    La pàgina web oficial de la Federació de Hoquei Patins
                    disposa de tots els horaris dels partits de la temporada.
                    Consulta tant la data, pista, hora, equip rival i inclús
                    resultats!
                </p>
                <div
                    className={toBEM({
                        block,
                        element: 'buttons-container',
                    })}
                >
                    <Button
                        variant="primary"
                        onClick={() => {}}
                        icon="instagram"
                    >
                        Accedeix al calendari
                    </Button>
                    <Button variant="primary" onClick={() => {}}>
                        Consulta horari entrenaments
                    </Button>
                </div>
                <p>
                    Al nostre Instagram trobaràs tota la informació sobre els
                    pròxims partits i qualsevol novetat o modificació que hi
                    hagi!{' '}
                </p>
            </section>
        </div>
    );
};
