import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Card } from '@/ui/card/Card';
import { Banner } from '@/ui/banner/Banner';
import './el-club.scss';

export type ElClubProps = BaseComponentProps;

const block = registerBlockName('ElClub');

export const ElClub = ({ ...props }: ElClubProps) => {
    return (
        <>
            <Banner variant="el-club" />

            <section {...getBaseComponentProps({ ...props, block })}>
                <div className={toBEM({ block, element: 'grid' })}>
                    <Card number="01" title="Qui som?">
                        Som un grup de <strong>gent diversa</strong>, nens i
                        nenes, pares i mares, jugadors i exjugadors, tots
                        apassionats per l’Hoquei Patins, pel nostre barri i per
                        la nostra ciutat, Terrassa. Formem part d’un{' '}
                        <strong>club històric</strong> de l’Hoquei Patins de
                        Catalunya que existeix des de l’any 1950 i{' '}
                        <strong>ens en sentim orgullosos.</strong>
                    </Card>

                    <Card number="02" title="Què fem?">
                        Tenim com a objectiu{' '}
                        <strong>formar nens i joves</strong>, tant en la vessant
                        esportiva, mitjançant la pràctica de l’Hoquei Patins,
                        com en la vessant social i humana, i així
                        <strong>aportar un granet de sorra</strong> en la
                        millora de la societat. Aquest esport és emocionant i
                        dinàmic, on els reflexos, la capacitat de reacció,
                        l’habilitat amb els patins i l’agilitat amb l’estic i la
                        bola, són elements clau.
                    </Card>

                    <Card number="03" title="Què volem?">
                        Actualment som l’únic club d’Hoquei Patins de Terrassa i
                        volem que ens conegueu, i que us
                        <strong> sumeu al nostre projecte.</strong> Volem
                        promocionar la pràctica de l’Hoquei Patins a la ciutat
                        de Terrassa. A més,{' '}
                        <strong>fomentar la pràctica esportiva</strong> entre
                        els més petits i ajudar als esportistes en el seu
                        desenvolupament personal i esportiu.
                    </Card>

                    <Card number="04" title="Com ho fem?">
                        A partir d’Hoquei Patins. Millora la concentració, la
                        coordinació, la psicomotricitat, l’equilibri,
                        l’estabilitat i l’agilitat, alhora que és un
                        <strong> esport d’equip</strong>, i per tant, també{' '}
                        <strong>
                            treballa i millora les habilitats socials.
                        </strong>{' '}
                        A més, <strong>millora l’estat físic</strong> del
                        jugador i millora la salut cardiovascular i la
                        resistència física.
                    </Card>
                </div>
            </section>
        </>
    );
};
