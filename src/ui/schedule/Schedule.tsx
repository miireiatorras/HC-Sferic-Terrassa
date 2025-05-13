import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Schedule.scss';

export type ScheduleEvent = {
    /** The day of the event. */
    day: string;
    /** Start time of the event. */
    start: string;
    /** End time of the event. */
    end: string;
    /** Label to display for the event. */
    label: string;
    /** Category for styling or filtering purposes. */
    category: string;
};

export type ScheduleProps = BaseComponentProps & {
    /** Array of days to be displayed as columns. */
    days: readonly string[];
    /** List of events to populate the schedule. */
    events: ScheduleEvent[];
};

const block = registerBlockName('Schedule');

/**
 * `Schedule` is a UI component that renders a calendar-like table
 * for visualizing time-based events distributed across multiple days.
 */
export const Schedule = ({ days, events, ...props }: ScheduleProps) => {
    const times = Array.from(
        new Set(events.flatMap((e) => [e.start, e.end]))
    ).sort();

    const intervals = times.slice(0, -1).map((start, i) => ({
        start,
        end: times[i + 1],
    }));

    const remainingSpan: Record<string, number> = {};
    days.forEach((d) => {
        remainingSpan[d] = 0;
    });

    return (
        <div {...getBaseComponentProps({ ...props, block })}>
            <div className={toBEM({ block, element: 'wrapper' })}>
                <table className={toBEM({ block, element: 'table' })}>
                    <thead>
                        <tr>
                            <th
                                className={toBEM({ block, element: 'thTime' })}
                            ></th>
                            {days.map((day) => (
                                <th
                                    key={day}
                                    className={toBEM({
                                        block,
                                        element: 'thDay',
                                    })}
                                >
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {intervals.map(({ start, end }, rowIdx) => (
                            <tr key={start}>
                                <th
                                    className={toBEM({
                                        block,
                                        element: 'thTime',
                                    })}
                                >
                                    {start} – {end}
                                </th>

                                {days.map((day) => {
                                    if (remainingSpan[day] > 0) {
                                        remainingSpan[day]--;
                                        return null;
                                    }

                                    const ev = events.find(
                                        (e) =>
                                            e.day === day && e.start === start
                                    );
                                    if (ev) {
                                        const span =
                                            intervals.findIndex(
                                                (i) => i.end === ev.end
                                            ) -
                                            rowIdx +
                                            1;
                                        remainingSpan[day] = span - 1;
                                        return (
                                            <td
                                                key={day}
                                                rowSpan={span}
                                                className={toBEM({
                                                    block,
                                                    element: 'tdEvent',
                                                    modifiers: [ev.category],
                                                })}
                                            >
                                                {ev.label}
                                            </td>
                                        );
                                    }

                                    return (
                                        <td
                                            key={day}
                                            className={toBEM({
                                                block,
                                                element: 'tdEmpty',
                                            })}
                                        />
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
