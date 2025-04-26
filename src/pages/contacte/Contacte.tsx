import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    toBEM,
} from '@/utils';

import './Contacte.scss';
import Title from '@/ui/titles/Title';
import { Banner } from '@/ui/banner/Banner';
import Footer from '@/features/footer/Footer';
import { InfoCard } from '@/ui/info-card/InfoCard';
import { LocationMap } from '@/ui/map/LocationMap';
import { ContactForm } from '@/features/contact-form/ContactForm';

export type ContacteProps = BaseComponentProps & {};

const block = registerBlockName('Contacte');
export const Contacte = ({ ...props }: ContacteProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Banner variant="contacte" />
            <Title>On ens trobem?</Title>
            <LocationMap
                title="Pavelló Municipal de “La Maurina”"
                address="Carrer Sardenya, 34, Terrassa, 08224 Barcelona"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.673804104774!2d1.990687675927687!3d41.56304037127805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49298cca97331%3A0xbd289a3e7def4d19!2sPolideportivo%20Municipal%20La%20Maurina!5e1!3m2!1ses!2ses!4v1745516807393!5m2!1ses!2ses"
            />
            <section className={toBEM({ block, element: 'parlem-section' })}>
                <Title variant="light">Parlem?</Title>
                <div
                    className={toBEM({
                        block,
                        element: 'info-grid',
                    })}
                >
                    <InfoCard
                        icon="email"
                        text={<>info,sfericok@gmail.com</>}
                    />
                    <InfoCard
                        icon="call"
                        text={<>(+34) 609 061 492 / 616 860 388</>}
                    />
                    <InfoCard icon="instagram" text={<>@oksfericterrassa</>} />
                </div>
            </section>
            <section
                className={toBEM({
                    block,
                    element: 'et-llegim-section',
                })}
            >
                <Title>Et llegim</Title>
                <ContactForm title="Tens algun dubte? Omple el formulari i et respondrem" />
            </section>
            <Footer />
        </div>
    );
};
