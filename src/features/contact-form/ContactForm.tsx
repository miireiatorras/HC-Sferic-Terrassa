// src/ui/contact-form/ContactForm.tsx
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ContactForm.scss';
import { Input } from '../../ui/input/Input';

const block = registerBlockName('ContactForm');

export type Props = BaseComponentProps & {
    /** The title of the contact form. */
    title: string;
    /** Function to handle form submission. */
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
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
 * ContactForm renders a styled card with a heading, four Input controls,
 * and a submit button. Labels and placeholders are fully configurable.
 *
 * @param {Props} props – Component props.
 * @returns {JSX.Element} The rendered contact form.
 */
export const ContactForm = ({
    title,
    onSubmit,
    nameLabel = 'Nom i Cognoms',
    phoneLabel = 'Telèfon',
    emailLabel = 'Email',
    messageLabel = 'Consulta',
    namePlaceholder,
    phonePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    ...props
}: Props): JSX.Element => (
    <form
        {...getBaseComponentProps({ ...props, block })}
        onSubmit={onSubmit}
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

        <button type="submit" className={toBEM({ block, element: 'button' })}>
            Enviar
        </button>
    </form>
);
