import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export type TitleProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Title');

export const Title = ({ children, ...props }: TitleProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div {...getBaseComponentProps({ ...props, block })} ref={ref}>
            <motion.div
                className={toBEM({ block, element: 'bar' })}
                initial={{ x: '-100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            <motion.h1
                className={toBEM({ block, element: 'text' })}
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
