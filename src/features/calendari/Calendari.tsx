import { Button } from '@/ui/button/Button';
import Title from '@/ui/titles/Title';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './Calendari.scss';
import { NavLink } from 'react-router-dom';

export type CalendariProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Calendari');
export const Calendari = ({ ...props }: CalendariProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Title variant="light">Calendari partits</Title>
            <section
                className={toBEM({
                    block,
                    element: 'section',
                })}
            >
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
                        as={NavLink}
                        to="http://www.hoqueipatins.fecapa.cat/ag/"
                        variant="primary-white"
                        icon="launch"
                        iconPosition="right"
                    >
                        Accedeix al calendari
                    </Button>
                    <Button
                        as={NavLink}
                        to="/horari"
                        variant="secondary-white"
                        icon="arrow-right"
                        iconPosition="right"
                    >
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
