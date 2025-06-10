import { motion } from 'framer-motion';
import { Title } from '@/ui/titles/Title';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './patrocinadors.scss';

export type Props = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Patrocinadors');

export const Patrocinadors = ({ children, ...props }: Props) => {
    const logos = [
        'elymet_mail.png',
        'hockeyteam-logo.png',
        'moto-project-logo.jpg',
        'rmdislovall-logo.png',
        'storepack-logo.png',
        'caldereria-jocasa-logo.png',
    ];

    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Title>Patrocinadors</Title>

            <div className={toBEM({ block, element: 'logos' })}>
                {logos.map((src, index) => (
                    <motion.img
                        key={index}
                        src={`/logos-sponsors/${src}`}
                        alt={src.split('.')[0]}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                        }}
                        className={toBEM({ block, element: 'logo' })}
                    />
                ))}
            </div>

            <div className={toBEM({ block, element: 'contacte' })}>
                <p>Si t’agrada el que fem, suma-t’hi!</p>
                <span>
                    <a href="/contacte">Contacta’ns!</a>
                </span>
            </div>

            {children}
        </div>
    );
};

export default Patrocinadors;
