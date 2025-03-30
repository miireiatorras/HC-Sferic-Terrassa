/**
 * @file This file contains mechanisms to combine and assemble BEM-compliant classNames and verify the absence of name collisions
 * @version 1.1.0
 */

/**
 * Encodes the necessary information to generate a correct set of BEM classNames for a given element
 */
export type ToBEMProps = {
    block: string;
    element?: string;
    modifiers?: (string | false | null | undefined)[];
};

const toValidClassName = (text: string) =>
    text.replace(' ', '_').replace(/[^\w-]/g, '');

/**
 * Prepares BEM-structured class names related to a block, possibly an element, and a list of modifiers
 * @param {ToBEMProps} information Information about the object's desired class
 * @param {string} information.block Block className
 * @param {string?} information.element Element identifier within block
 * @param {(string|null|false|undefined)[]?} information.modifiers Array of modifiers to apply to the BEM className
 * @returns {string} BEM styled className
 */
export const toBEM = ({ block, element, modifiers }: ToBEMProps) => {
    const classes: string[] = [];
    let baseName: string = toValidClassName(block);
    if (element) baseName += '__' + toValidClassName(element);
    classes.push(baseName);
    modifiers?.filter(Boolean).forEach((mod) => {
        classes.push(baseName + '--' + toValidClassName(mod as string));
    });
    return classes.join(' ');
};

/**
 * Joins classNames in a list, allowing for falsy values to discard in the list
 * @param {(false | null | undefined | string)[]} classes classNames to be joined if truthy
 * @returns {string} joined classNames
 */
export const classNames = (
    ...classes: (false | null | undefined | string)[]
) => {
    return classes.filter(Boolean).join(' ');
};

/**
 * Counts the number of registries of each 'block' variable to help detect name collisions
 */
const declaredBlocks: { [block: string]: number } = {};
/**
 *
 * @param block 'block' name that we want to register to the name collision dictionary check
 * @returns properly escaped className
 */
export const registerBlockName = (block: string) => {
    const baseName = toValidClassName(block);
    declaredBlocks[baseName] = (declaredBlocks[baseName] || 0) + 1;
    return baseName;
};
/**
 *
 * @returns true only if there is no name collision among the subscribed blocks
 */
export const validateBlockNameUnicity = () => {
    return Object.values(declaredBlocks).reduce((prev, cur) => {
        return prev && cur === 1;
    }, true);
};

/**
 * For test purposes only
 */
export const resetUnicityBlocks = () => {
    for (const a in declaredBlocks) {
        delete declaredBlocks[a];
    }
};
