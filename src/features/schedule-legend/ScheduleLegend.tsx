import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './ScheduleLegend.scss';

const block = registerBlockName('ScheduleLegend');

export const ScheduleLegend = ({ ...props }: BaseComponentProps) => (
    <div {...getBaseComponentProps({ ...props, block })}>
        {[
            { key: 'iniciacio', label: 'Iniciació' },
            { key: 'formatiu', label: 'Formatiu' },
            { key: 'senior', label: 'Sènior' },
        ].map((item) => (
            <div key={item.key} className={toBEM({ block, element: 'item' })}>
                <span
                    className={toBEM({
                        block,
                        element: 'dot',
                        modifiers: [item.key],
                    })}
                />
                {item.label}
            </div>
        ))}
    </div>
);
