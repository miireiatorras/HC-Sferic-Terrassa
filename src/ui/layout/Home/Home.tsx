import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import Patrocinadors from '@/features/patrocinadors/Patrocinadors';
import { Title } from '@/ui/titles/Title';
import Footer from '@/features/footer/Footer';
import { Hero } from '@/features/hero/Hero';
import Discover from '@/features/hero/Discover/Discover';
import { ReadyToJoin } from '@/features/ReadyToJoin/ReadyToJoin';
import { Caldendari } from '@/features/calendari/Calendari';
// import { Form } from 'react-router-dom';

export type HomeProps = BaseComponentProps & {};

const block = registerBlockName('Home');
export const Home = ({ ...props }: HomeProps) => {
    return (
        <main {...getBaseComponentProps({ ...props, block })}>
            <Hero />
            <Discover />
            <ReadyToJoin />
            <Caldendari />
            <Patrocinadors />
            <Footer />
        </main>
    );
};
export default Home;
