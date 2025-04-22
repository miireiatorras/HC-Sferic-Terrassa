import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';

import './TimelineCard.scss';

export type TimelineCardProps = BaseComponentProps & {
    year: string;
    title: string;
    description: string;
};

const blockCard = registerBlockName('TimelineCard');
export const TimelineCard = ({
    year,
    title,
    description,
    ...props
}: TimelineCardProps) => {
    return (
        <div {...getBaseComponentProps({ ...props, block: blockCard })}>
            <p className={toBEM({ block: blockCard, element: 'year' })}>
                {year}
            </p>
            <p className={toBEM({ block: blockCard, element: 'title' })}>
                {title}
            </p>
            <p className={toBEM({ block: blockCard, element: 'description' })}>
                {description}
            </p>
        </div>
    );
};
