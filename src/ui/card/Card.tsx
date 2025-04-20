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
};

const block = registerBlockName('Card');

/**
 * `Card` is a UI component that displays a number, a title, and an optional body.
 */
export const Card = ({ number, title, children, ...props }: CardProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'number' })}>{number}</div>
            <h3 className={toBEM({ block, element: 'title' })}>{title}</h3>
            <div className={toBEM({ block, element: 'body' })}>{children}</div>
        </div>
    );
};
