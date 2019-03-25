import ModelInterface from "./ModelInterface";

/**
 * Basic model implementation, should be extended to create own models
 */
export default abstract class Model implements ModelInterface {
    abstract getName(): string;

    protected _id: string | null = null;

    get id(): string | null {
        return this._id;
    }

    set id(id: string | null) {
        if (this._id !== null) {
            throw new Error("Overwriting the id is forbidden.");
        }

        this._id = id;
    }
}