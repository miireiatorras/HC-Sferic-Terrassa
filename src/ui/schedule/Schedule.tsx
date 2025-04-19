import React from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './Schedule.scss';

export type ScheduleEvent = {
    day: string; // 'Dilluns', 'Dimarts', …
    start: string; // '09:00'
    end: string; // '14:00'
    label: string;
    category: string; // 'iniciacio', 'formatiu', 'senior'
};

export type ScheduleProps = BaseComponentProps & {
    days: readonly string[];
    events: ScheduleEvent[];
};

const block = registerBlockName('Schedule');

export const Schedule = ({ days, events, ...props }: ScheduleProps) => {
    // 1) obtén totes les hores úniques ordenades
    const times = Array.from(
        new Set(events.flatMap((e) => [e.start, e.end]))
    ).sort();
    // 2) crea els intervals [
    //    { start: times[0], end: times[1] }, { start: times[1], end: times[2] }, …
    // ]
    const intervals = times.slice(0, -1).map((start, i) => ({
        start,
        end: times[i + 1],
    }));

    // 3) prepara un mapa per controlar spans per dia
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
                                    // si un event ocupa encara estas franjas, decrementa el contador y no pintes celda
                                    if (remainingSpan[day] > 0) {
                                        remainingSpan[day]--;
                                        return null;
                                    }

                                    // busca un event que comenci aquí
                                    const ev = events.find(
                                        (e) =>
                                            e.day === day && e.start === start
                                    );
                                    if (ev) {
                                        // determina cuántas franjas ocupa
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
                                                })}
                                            >
                                                {ev.label}
                                            </td>
                                        );
                                    }

                                    // ninguna celda ocupada: vacía
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
