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
        children?: React.ReactNode;
        variant?:
            | 'primary'
            | 'secondary'
            | 'error'
            | 'warning'
            | 'info'
            | 'empty'
            | 'text';
        loading?: boolean;
        Icon?: Compose<ButtonIconInternalProps, ExternalIconProps>;
        icon?: IconNames;
        onClick?: () => void;
        as?: React.ElementType;
        to?: string;
    };

const block = registerBlockName('Button');

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
