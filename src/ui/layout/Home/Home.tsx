import { Helmet } from '@dr.pogodin/react-helmet';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';
import { Hero } from '@/features/hero/Hero';
import Discover from '@/features/hero/Discover/Discover';
import { ReadyToJoin } from '@/features/ReadyToJoin/ReadyToJoin';
import { Calendari } from '@/features/calendari/Calendari';
import { Instagram } from '@/features/instagram/Instagram';
import Patrocinadors from '@/features/patrocinadors/Patrocinadors';
import './Home.scss';

export type HomeProps = BaseComponentProps;

const block = registerBlockName('Home');

export const Home = ({ ...props }: HomeProps) => {
    const description = `Benvinguts a HC SFERIC Terrassa, el club d’Hoquei Patins amb més de 70 anys d’història a Terrassa. Descobreix la nostra missió, equips i activitats.`;

    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>HC SFERIC Terrassa. Club d'Hoquei Patins - Inici</title>
                <meta name="description" content={description} />

                <link rel="canonical" href="https:/sfericok.cat/" />

                <meta property="og:url" content="https:/sfericok.cat/" />
                <meta property="og:image" content="/logo-tranp-negre.png" />
                <meta
                    property="og:title"
                    content="HC SFERIC Terrassa. Club d'Hoquei Patins - Inici"
                />
                <meta property="og:description" content={description} />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <main {...getBaseComponentProps({ ...props, block })}>
                <Hero />
                <Discover />
                <Calendari />
                <ReadyToJoin />
                <Instagram />
                <div className={toBEM({ block, element: 'div' })}>
                    <Patrocinadors />
                </div>
            </main>
        </>
    );
};

export default Home;
