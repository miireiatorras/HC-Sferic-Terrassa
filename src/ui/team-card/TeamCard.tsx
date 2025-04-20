import React, { useState } from 'react';
import {
    toBEM,
    registerBlockName,
    BaseComponentProps,
    getBaseComponentProps,
} from '@/utils';
import './TeamCard.scss';

/**
 * Props for the `TeamCard` component.
 */
export type TeamCardProps = BaseComponentProps & {
    /** Image source URL for the team card background. */
    imageSrc: string;
    /** Title to display over the image. */
    title: string;
    /** List of member names to display in the overlay. */
    members: string[];
};

const block = registerBlockName('TeamCard');

/**
 * `TeamCard` is a UI component that displays a team image, title,
 * and a list of members inside an overlay. Clicking the image opens it in a zoomed modal.
 */
export const TeamCard = ({
    imageSrc,
    title,
    members,
    ...props
}: TeamCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div {...getBaseComponentProps({ ...props, block })}>
                <div
                    className={toBEM({ block, element: 'imageWrapper' })}
                    onClick={() => setIsOpen(true)}
                >
                    <img
                        className={toBEM({ block, element: 'image' })}
                        src={imageSrc}
                        alt={title}
                    />
                    <div className={toBEM({ block, element: 'overlay' })}>
                        <div
                            className={toBEM({
                                block,
                                element: 'overlayInner',
                            })}
                        >
                            <h3
                                className={toBEM({
                                    block,
                                    element: 'overlayTitle',
                                })}
                            >
                                {title}
                            </h3>
                            <ul
                                className={toBEM({
                                    block,
                                    element: 'overlayList',
                                })}
                            >
                                {members.map((m, i) => (
                                    <li
                                        key={i}
                                        className={toBEM({
                                            block,
                                            element: 'overlayItem',
                                        })}
                                    >
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="ImageModal" onClick={() => setIsOpen(false)}>
                    <img
                        src={imageSrc}
                        alt={title}
                        className="ImageModal__img"
                    />
                </div>
            )}
        </>
    );
};
