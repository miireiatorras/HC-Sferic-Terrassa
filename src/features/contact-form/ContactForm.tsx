import React, { useRef } from 'react';
import { init, sendForm } from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ContactForm.scss';
import { Input } from '@/ui/input/Input';

const block = registerBlockName('ContactForm');

export type ContactFormProps = BaseComponentProps & {
    /** The title of the contact form. */
    title: string;
    /** Labels and placeholders for the input fields. */
    nameLabel?: string;
    phoneLabel?: string;
    emailLabel?: string;
    messageLabel?: string;
    namePlaceholder?: string;
    phonePlaceholder?: string;
    emailPlaceholder?: string;
    messagePlaceholder?: string;
};

/**
 * ContactForm renders a styled form that, on submit,
 * envia els dades via EmailJS a la plantilla configurada.
 */
export const ContactForm: React.FC<ContactFormProps> = ({
    title,
    nameLabel = 'Nom i Cognoms',
    phoneLabel = 'Telèfon',
    emailLabel = 'Email',
    messageLabel = 'Consulta',
    namePlaceholder,
    phonePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    ...props
}) => {
    init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE!,
            import.meta.env.VITE_EMAILJS_TEMPLATE!,
            formRef.current
        )
            .then(() => {
                toast.success('El formulari s’ha enviat correctament.');
                formRef.current!.reset();
            })
            .catch((err) => {
                console.error('Error al enviar:', err);
                toast.error(
                    'Hi ha hagut un error en enviar el formulari. Torna-ho a provar.'
                );
            });
    };

    return (
        <form
            {...getBaseComponentProps({ ...props, block })}
            ref={formRef}
            onSubmit={handleSubmit}
            className={toBEM({ block })}
        >
            <h2 className={toBEM({ block, element: 'title' })}>{title}</h2>

            <div className={toBEM({ block, element: 'fields' })}>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    label={nameLabel}
                    placeholder={namePlaceholder ?? nameLabel}
                    required
                />

                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    label={phoneLabel}
                    placeholder={phonePlaceholder ?? phoneLabel}
                    required
                />

                <Input
                    id="email"
                    name="email"
                    type="email"
                    label={emailLabel}
                    placeholder={emailPlaceholder ?? emailLabel}
                    fullWidth
                    required
                />

                <Input
                    id="message"
                    name="message"
                    type="textarea"
                    label={messageLabel}
                    placeholder={messagePlaceholder ?? messageLabel}
                    fullWidth
                    required
                />
            </div>

            <div className={toBEM({ block, element: 'checkbox' })}>
                <input
                    type="checkbox"
                    id="disclaimerCheckbox"
                    name="disclaimerCheckbox"
                    required
                />
                <label htmlFor="disclaimerCheckbox">
                    He llegit i accepto que les dades no seran cedides a tercers
                    ni conservades un cop finalitzat el procés d’atenció.
                </label>
            </div>

            <button
                type="submit"
                className={toBEM({ block, element: 'button' })}
            >
                Enviar
            </button>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                style={{ marginTop: '5rem', zIndex: 9999 }}
            />
        </form>
    );
};
