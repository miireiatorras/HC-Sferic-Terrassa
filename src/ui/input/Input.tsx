import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Input.scss';
import { JSX } from 'react';

const block = registerBlockName('Input');

export type Props = BaseComponentProps & {
    /** Unique identifier for the input element. */
    id: string;
    /** Name attribute for the input element. */
    name: string;
    /** Type of the input element. Defaults to 'text'. */
    type?: 'text' | 'email' | 'tel' | 'textarea';
    /** Label for the input element. */
    label: string;
    /** Placeholder text for the input element. */
    placeholder?: string;
    /** Whether the input should take the full width of its container. */
    fullWidth?: boolean;
};

/**
 * `Input` renderiza un label + control (<input> o <textarea>),
 * aplicando BEM modifiers y los estilos definidos en Input.scss.
 */
export const Input = ({
    id,
    name,
    type = 'text',
    label,
    placeholder = '',
    fullWidth = false,
    ...props
}: Props): JSX.Element => {
    const mods = fullWidth ? ['full'] : [];
    return (
        <div
            {...getBaseComponentProps({ ...props, block, modifiers: mods })}
            className={toBEM({ block, modifiers: mods })}
        >
            <label htmlFor={id} className={toBEM({ block, element: 'label' })}>
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className={toBEM({ block, element: 'control' })}
                />
            ) : (
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={toBEM({ block, element: 'control' })}
                />
            )}
        </div>
    );
};
