import Footer from '@/features/footer/Footer';
import { Banner } from '@/ui/banner/Banner';
import Title from '@/ui/titles/Title';
import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type InscripcionsProps = BaseComponentProps & {};

const block = registerBlockName('Inscripcions');
export const Inscripcions = ({ ...props }: InscripcionsProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner variant="inscriu-te" />
            <Title>Apunta't i gaudeix del nostre club</Title>
            <Footer />
        </div>
    );
};
