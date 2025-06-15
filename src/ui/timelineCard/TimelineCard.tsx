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

const block = registerBlockName('TimelineCard');

export const TimelineCard = ({
    year,
    title,
    description,
    ...props
}: TimelineCardProps) => (
    <div {...getBaseComponentProps({ ...props, block })}>
        <div className={toBEM({ block, element: 'row' })}>
            <div className={toBEM({ block, element: 'year' })}>{year}</div>
            <div className={toBEM({ block, element: 'content' })}>
                <p className={toBEM({ block, element: 'title' })}>{title}</p>
                <p className={toBEM({ block, element: 'description' })}>
                    {description}
                </p>
            </div>
        </div>
    </div>
);

export default TimelineCard;
