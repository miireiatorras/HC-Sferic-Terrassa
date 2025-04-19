import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './TeamCard.scss';

export type TeamCardProps = BaseComponentProps & {
    imageSrc: string;
    title: string;
    members: string[];
};

const block = registerBlockName('TeamCard');

export const TeamCard = ({
    imageSrc,
    title,
    members,
    ...props
}: TeamCardProps) => (
    <div {...getBaseComponentProps({ ...props, block })}>
        <div className={toBEM({ block, element: 'imageWrapper' })}>
            <img
                className={toBEM({ block, element: 'image' })}
                src={imageSrc}
                alt={title}
            />
            <div className={toBEM({ block, element: 'overlay' })}>
                <h3 className={toBEM({ block, element: 'overlayTitle' })}>
                    {title}
                </h3>
                <ul className={toBEM({ block, element: 'overlayList' })}>
                    {members.map((m, i) => (
                        <li
                            key={i}
                            className={toBEM({ block, element: 'overlayItem' })}
                        >
                            {m}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);
