import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import Patrocinadors from '@/features/patrocinadors/Patrocinadors';
import { Title } from '@/ui/titles/Title';
import Footer from '@/features/footer/Footer';
// import { Form } from 'react-router-dom';

export type HomeProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Home');
export const Home = ({ children, ...props }: HomeProps) => {
    return (
        <main {...getBaseComponentProps({ ...props, block })}>
            <Title>Calendari</Title>
            <p>Consulta l’horari dels entrenaments d’avui.</p>
            <Title>Troba'ns a Instagram!</Title>
            {/* <Form /> */}
            <Patrocinadors />
            <Footer />
            {children}
        </main>
    );
};
export default Home;
