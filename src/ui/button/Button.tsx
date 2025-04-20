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

export type ButtonIconInternalProps = { icon: IconNames; className?: string };

export type ButtonProps<ExternalIconProps extends object> =
    BaseComponentProps & {
        /** Optional content inside the button. */
        children?: React.ReactNode;
        /** Visual variant of the button. */
        variant?:
            | 'primary'
            | 'secondary'
            | 'error'
            | 'warning'
            | 'info'
            | 'empty'
            | 'text';
        /** Whether the button is in a loading state. */
        loading?: boolean;
        /** Icon component and its external props. */
        Icon?: Compose<ButtonIconInternalProps, ExternalIconProps>;
        /** Name of the icon to show. */
        icon?: IconNames;
        /** Click handler function. */
        onClick?: () => void;
        /** Component type, defaults to 'button'. */
        as?: React.ElementType;
        /** Link destination if rendered as a link. */
        to?: string;
    };

const block = registerBlockName('Button');

/**
 * `Button` is a versatile UI component that supports multiple variants,
 * optional icons, and link or button rendering.
 */
export const Button = <ExternalIconProps extends object>({
    className,
    children,
    variant = 'primary',
    icon,
    Icon = { component: BaseIcon, externalProps: {} as ExternalIconProps },
    as: Component = 'button',
    to,
    onClick,
    ...props
}: ButtonProps<ExternalIconProps>) => {
    const isLink = Component !== 'button';

    return (
        <Component
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [variant, ...(icon ? ['with-icon'] : [])],
                className,
            })}
            {...(isLink ? { to } : {})}
            {...(!isLink ? { type: 'button', onClick } : { onClick })}
        >
            <>
                {icon && (
                    <div
                        className={toBEM({ block, element: 'icon-container' })}
                    >
                        <Icon.component
                            icon={icon}
                            {...Icon.externalProps}
                            className="Icon"
                        />
                    </div>
                )}
                {children}
            </>
        </Component>
    );
};
