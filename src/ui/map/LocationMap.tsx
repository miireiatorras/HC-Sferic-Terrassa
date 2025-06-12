import React from 'react';
import { toBEM, registerBlockName } from '@/utils';
import './LocationMap.scss';
import { Icon } from '../Icon/Icon';

export interface LocationMapProps {
    /** Title or label for the location */
    title: string;
    /** Full address string */
    address: string;
    /** Google Maps embed URL or other map iframe source */
    mapSrc: string;
}

const block = registerBlockName('LocationMap');

/**
 * Displays a location card with an icon, address info and an embedded map.
 */
export const LocationMap: React.FC<LocationMapProps> = ({
    title,
    address,
    mapSrc,
}) => {
    return (
        <div className={toBEM({ block, element: 'container' })}>
            <div className={toBEM({ block, element: 'info' })}>
                <div className={toBEM({ block, element: 'icon-wrapper' })}>
                    <Icon
                        icon="location_on"
                        className={toBEM({ block, element: 'icon' })}
                    />
                </div>
                <div className={toBEM({ block, element: 'details' })}>
                    <p className={toBEM({ block, element: 'title' })}>
                        {title}
                    </p>
                    <p className={toBEM({ block, element: 'address' })}>
                        {address}
                    </p>
                </div>
            </div>

            <div className={toBEM({ block, element: 'map' })}>
                <iframe
                    title={`Map of ${title}`}
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                />
            </div>
        </div>
    );
};
