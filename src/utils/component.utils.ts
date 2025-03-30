/**
 * @file This file contains mechanisms to simplify the standarization of React component composition, relying on the className.utils standards.
 * @version 1.1.0
 */

import React from 'react';
import { classNames, toBEM } from './className.utils';

/**
 * All component propTypes should extend from this structure. The components should be able to transfer its content to their correct elements.
 */
export type BaseComponentProps = {
    className?: string;
    id?: string;
    'data-testid'?: string;
};

/**
 * Extension of BaseComponentProps by contextual information about the component
 */
export type ExtendedBaseComponentProps = BaseComponentProps & {
    block: string;
    modifiers?: (string | false | null | undefined)[];
};

/**
 *
 * @param {ExtendedBaseComponentProps} props Combination of external and contextual information
 * @returns {BaseComponentProps} the base component props updated with contextual information, transferable down to the main or central element of the component
 */
export const getBaseComponentProps = ({
    block,
    modifiers,
    className,
    id,
    ...props
}: ExtendedBaseComponentProps) => {
    return {
        className: classNames(className, toBEM({ block, modifiers })),
        id,
        'data-testid': props['data-testid'],
    };
};

/**
 * The Compose type helps us flexibilize component composition whenever the subordinate component can receive a flexible block of external props in addition to the rigid set of internal props
 */
export type Compose<
    InternalProps extends object,
    ExternalProps extends object
> = {
    externalProps: ExternalProps;
    component: (props: InternalProps & ExternalProps) => React.ReactNode;
};
