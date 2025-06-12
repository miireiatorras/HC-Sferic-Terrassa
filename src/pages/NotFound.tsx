import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './NotFound.scss';

export type Props = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('NotFound');

export const NotFound = ({ children, ...props }: Props) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <h1 className={toBEM({ block, element: 'code' })}>404</h1>
            <h2 className={toBEM({ block, element: 'title' })}>
                Pàgina no trobada
            </h2>
            <p className={toBEM({ block, element: 'desc' })}>
                Ho sentim, la pàgina que busques no existeix o ha estat moguda.
            </p>
            <a href="/" className={toBEM({ block, element: 'link' })}>
                Torna a l'inici
            </a>
            {children}
        </div>
    );
};

export default NotFound;
