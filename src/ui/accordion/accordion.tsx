import {
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

export type AccordionProps = BaseComponentProps & {
    children?: React.ReactNode;
};

const block = registerBlockName('Accordion');
export const Accordion = ({ children, ...props }: AccordionProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block })}>{children}</div>
    );
};
