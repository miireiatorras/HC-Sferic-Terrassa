import React, { useRef } from 'react';
import { init, sendForm } from '@emailjs/browser';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ContactForm.scss';
import { Input } from '@/ui/input/Input';

const block = registerBlockName('ContactForm');

export type Props = BaseComponentProps & {
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
 * envía los datos via EmailJS a la plantilla configurada.
 */
export const ContactForm: React.FC<Props> = ({
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
                alert('¡Formulario enviado con éxito!');
                formRef.current!.reset();
            })
            .catch((err) => {
                console.error('Error al enviar:', err);
                alert('Error enviando el formulario. Intenta de nuevo.');
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
                />

                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    label={phoneLabel}
                    placeholder={phonePlaceholder ?? phoneLabel}
                />

                <Input
                    id="email"
                    name="email"
                    type="email"
                    label={emailLabel}
                    placeholder={emailPlaceholder ?? emailLabel}
                    fullWidth
                />

                <Input
                    id="message"
                    name="message"
                    type="textarea"
                    label={messageLabel}
                    placeholder={messagePlaceholder ?? messageLabel}
                    fullWidth
                />
            </div>

            <button
                type="submit"
                className={toBEM({ block, element: 'button' })}
            >
                Enviar
            </button>
        </form>
    );
};
