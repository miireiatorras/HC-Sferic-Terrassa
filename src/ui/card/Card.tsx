import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Card.scss';

export type CardProps = BaseComponentProps & {
    number: string;
    title: string;
    children?: React.ReactNode;
};

const block = registerBlockName('Card');

export const Card = ({ number, title, children, ...props }: CardProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'number' })}>{number}</div>
            <h3 className={toBEM({ block, element: 'title' })}>{title}</h3>
            <div className={toBEM({ block, element: 'body' })}>{children}</div>
        </div>
    );
};
