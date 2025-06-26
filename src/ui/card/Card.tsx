import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Card.scss';

export type CardProps = BaseComponentProps & {
    /** The number to be displayed at the top of the card. */
    number: string;
    /** The title of the card. */
    title: string;
    /** Optional content to be rendered inside the card body. */
    children?: React.ReactNode;
    onClick?: () => void;
    'aria-label'?: string;
};

const block = registerBlockName('Card');

/**
 * `Card` is a UI component that displays a number, a title, and an optional body.
 */
export const Card = ({
    number,
    title,
    children,
    onClick,
    'aria-label': ariaLabel,
    ...props
}: CardProps) => {
    const isClickable = typeof onClick === 'function';
    return (
        <div
            {...getBaseComponentProps({ ...props, block })}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onClick={onClick}
            onKeyDown={
                isClickable
                    ? (e) => {
                          if ((e.key === 'Enter' || e.key === ' ') && onClick) {
                              e.preventDefault();
                              onClick();
                          }
                      }
                    : undefined
            }
            aria-label={ariaLabel}
            style={{
                outline: 'none',
                cursor: isClickable ? 'pointer' : 'default',
            }}
        >
            <div className={toBEM({ block, element: 'number' })}>{number}</div>
            <h3 className={toBEM({ block, element: 'title' })}>{title}</h3>
            <div className={toBEM({ block, element: 'body' })}>{children}</div>
        </div>
    );
};
