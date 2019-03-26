import Model from "./Model";

/**
 * A list of models index by their name
 */
export default class ModelList {
    [index: string]: { new(): Model, getName(): string }
}