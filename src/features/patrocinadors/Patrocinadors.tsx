import React from 'react';
import { motion } from 'framer-motion';
import { Title } from '@/ui/titles/Title';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import data from './patrocinadors.json';
import './patrocinadors.scss';

interface PatrocinadorsData {
    header: string;
    logos: string[];
    contact: {
        text: string;
        linkText: string;
        linkHref: string;
    };
}

const { header, logos, contact } = data as PatrocinadorsData;

export type Props = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Patrocinadors');

export const Patrocinadors: React.FC<Props> = ({ children, ...props }) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <Title>{header}</Title>

            <div className={toBEM({ block, element: 'logos' })}>
                {logos.map((src, index) => (
                    <motion.img
                        key={index}
                        src={`/logos-sponsors/${src}`}
                        alt={src.split('.')[0]}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className={toBEM({ block, element: 'logo' })}
                    />
                ))}
            </div>

            <div className={toBEM({ block, element: 'contacte' })}>
                <p>{contact.text}</p>
                <span>
                    <a href={contact.linkHref}>{contact.linkText}</a>
                </span>
            </div>

            {children}
        </div>
    );
};

export default Patrocinadors;
