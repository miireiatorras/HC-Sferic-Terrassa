import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { Card } from '@/ui/card/Card';
import { Banner } from '@/ui/banner/Banner';
import './el-club.scss';
import Title from '@/ui/titles/Title';
import { OrganisationTabs } from '@/features/organisation-tabs/OrganisationTabs';
import { ImageScrollGallery } from '@/ui/ImageScrollGallery/ImageScrollGallery';
import { TimelineCard } from '@/ui/timelineCard/TimelineCard';
import { InfoCard } from '@/ui/info-card/InfoCard';
import Footer from '@/features/footer/Footer';

export type ElClubProps = BaseComponentProps;

const block = registerBlockName('ElClub');

export const ElClub = ({ ...props }: ElClubProps) => {
    const images = [
        '/old/antiga1.png',
        '/old/antiga2.png',
        '/old/antiga3.png',
        '/old/antiga4.png',
        '/old/antiga5.png',
    ];

    return (
        <>
            <Banner variant="el-club" />
            <Title>Missió i valors</Title>
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
                        millora de la societat...
                    </Card>

                    <Card number="03" title="Què volem?">
                        Actualment som l’únic club d’Hoquei Patins de Terrassa i
                        volem que ens conegueu, i que us
                        <strong> sumeu al nostre projecte.</strong>...
                    </Card>

                    <Card number="04" title="Com ho fem?">
                        A partir d’Hoquei Patins. Millora la concentració, la
                        coordinació, la psicomotricitat, l’equilibri,
                        l’estabilitat i l’agilitat...
                    </Card>
                </div>

                <Title>La nostra història i origens</Title>

                <ImageScrollGallery images={images} />

                <div className={toBEM({ block, element: 'timeline' })}>
                    <TimelineCard
                        year="1932"
                        title="Fundació del Club"
                        description="Amb el nom de S.F Terrassa, amb la pionera secció de bàsquet, amb seu al carrer Faraday, 33–41, del barri de Ca n’Aurell de Terrassa."
                    />
                    <TimelineCard
                        year="1950"
                        title="Creació secció d’Hoquei Patins"
                        description="A la temporada 1950–1951 es crea la secció d’Hoquei Patins. L’SFERIC de Terrassa esdevé un dels precursors de l’hoquei al nostre país."
                    />
                    <TimelineCard
                        year="1973"
                        title="Agrupació SFERIC"
                        description="A partir de l’any 1973, l’entitat passa a anomenar-se Agrupació SFERIC."
                    />
                    <TimelineCard
                        year="2018"
                        title="Separació de clubs"
                        description="És a la Temporada 2018–19, quan cada secció esdevé club independent: Club esportiu Sferic Bàsquet i Hoquei Club Sferic Terrassa."
                    />
                </div>
                <div className={toBEM({ block, element: 'info-grid' })}>
                    <InfoCard
                        icon="archive"
                        text={
                            <>
                                Els orígens del club estan{' '}
                                <strong>molt vinculats</strong> al barri de Ca
                                n’Aurell de Terrassa i en concret a l’activitat
                                de la seva <strong>parròquia</strong>, la
                                Sagrada Família. Així doncs, encara es conserva
                                el nom de l’indret on es va crear:{' '}
                                <strong>
                                    Societat Familiar Esportiva Recreativa i
                                    Cultural (SFERIC)
                                </strong>
                                .
                            </>
                        }
                    />
                    <InfoCard
                        icon="family_restroom"
                        text={
                            <>
                                L’SFERIC és una de les entitats de referència i
                                realitza una tasca{' '}
                                <strong>
                                    educativa, social, cultural i esportiva
                                </strong>{' '}
                                d’important rellevància, esdevenint com a
                                element clau en la cohesió del barri de Ca
                                n’Aurell i, per tant, de Terrassa. El club i les
                                seves seccions evolucionen molt{' '}
                                <strong>positivament</strong>, així com també ho
                                fa el barri i la ciutat.
                            </>
                        }
                    />
                    <InfoCard
                        icon="location_on"
                        text={
                            <>
                                La secció de Bàsquet manté la{' '}
                                <strong>ubicació original</strong>, mentre que
                                l’Hoquei Patins, amb el suport de{' '}
                                <strong>l’Ajuntament de Terrassa</strong>, es
                                desplaça al Poliesportiu Municipal de La
                                Maurina, al carrer Sardenya, 34, de Terrassa.
                            </>
                        }
                    />
                </div>

                <Title>Organització del club</Title>
                <p
                    className={toBEM({
                        block,
                        element: 'p',
                    })}
                >
                    Som una Entitat Sense Ànim de Lucre.Per tant, no busquem un
                    benefici econòmic sinó que perseguim una finalitat social,
                    altruista, esportiva i comunitària. A nivell ecònomic, ens
                    financem a través de les quotes dels socis, de donatius, de
                    patrociandors i d’ajudes de les administracions. També
                    comptem amb el suport de l’Ajuntament de Terrassa. <br />{' '}
                    <br />
                    Pel que fa a l’estructura de Club, es configura de la
                    següent manera:
                </p>

                <OrganisationTabs />
            </section>
            <Footer
                className={toBEM({
                    block,
                    element: 'Footer',
                })}
            />
        </>
    );
};
