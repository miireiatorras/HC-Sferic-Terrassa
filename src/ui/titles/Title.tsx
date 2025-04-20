import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Title.scss';

/**
 * Props for the `Title` component.
 */
export type TitleProps = BaseComponentProps & {
    /** Optional content to display as the title. */
    children?: React.ReactNode;
    /** Visual variant of the title. */
    variant?: 'default' | 'light';
};

const block = registerBlockName('Title');

/**
 * `Title` is a UI component that renders a heading with an animated bar.
 * The component slides into view when it enters the viewport.
 */
export const Title = ({
    children,
    variant = 'default',
    ...props
}: TitleProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div
            {...getBaseComponentProps({
                ...props,
                block,
                modifiers: [variant],
            })}
            ref={ref}
        >
            <motion.div
                className={toBEM({ block, element: 'bar' })}
                initial={{ x: '-100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            <motion.h1
                className={toBEM({ block, element: 'title' })}
                initial={{ x: '-100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {children}
            </motion.h1>
        </div>
    );
};

export default Title;
