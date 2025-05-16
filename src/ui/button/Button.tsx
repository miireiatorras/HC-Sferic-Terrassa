import React from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
    Compose,
} from '@/utils';
import './Button.scss';
import { Icon as BaseIcon, IconNames } from '@/ui/Icon/Icon';

export type ButtonIconInternalProps = {
    icon: IconNames;
    className?: string;
};

export type ButtonProps<ExternalIconProps extends object> =
    BaseComponentProps & {
        /** Optional content inside the button. */
        children?: React.ReactNode;
        /** Visual variant of the button. */

        variant?:
            | 'primary-green'
            | 'primary-white'
            | 'secondary-white'
            | 'secondary-green'
            | 'text'
            | 'error'
            | 'warning'
            | 'info';
        /** Whether the button is in a loading state. */
        loading?: boolean;
        /** Custom Icon component and its external props. */
        Icon?: Compose<ButtonIconInternalProps, ExternalIconProps>;
        /** Name of the icon to show. */
        icon?: IconNames;
        /** Position of the icon relative to the text. */
        iconPosition?: 'left' | 'right';
        /** Click handler function. */
        onClick?: () => void;
        /** Component type, defaults to 'button' (can be 'a', React‐Router Link, etc.). */
        as?: React.ElementType;
        /** If rendered as link, the href or to prop. */
        to?: string;
    };

const block = registerBlockName('Button');

/**
 * `Button` is a versatile UI component that supports multiple variants,
 * optional icons (left or right), and link or button rendering.
 */
export const Button = <ExternalIconProps extends object>({
    className,
    children,
    variant = 'primary-green',
    icon,
    Icon = { component: BaseIcon, externalProps: {} as ExternalIconProps },
    iconPosition = 'left',
    as: Component = 'button',
    to,
    onClick,
    ...props
}: ButtonProps<ExternalIconProps>) => {
    const isLink = Component !== 'button';

    const bemProps = getBaseComponentProps({
        ...props,
        block,
        className,
        modifiers: [
            variant,
            icon ? 'with-icon' : null,
            icon ? `icon-${iconPosition}` : null,
        ].filter(Boolean) as string[],
    });

    return (
        <Component
            {...bemProps}
            {...(isLink ? { to } : { type: 'button', onClick })}
        >
            {icon && (
                <span className={toBEM({ block, element: 'icon-container' })}>
                    <Icon.component
                        icon={icon}
                        {...Icon.externalProps}
                        className={toBEM({ block, element: 'icon' })}
                    />
                </span>
            )}
            {children}
        </Component>
    );
};
