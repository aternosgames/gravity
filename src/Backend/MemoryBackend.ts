import BackendInterface from "./BackendInterface";
import Model from "../Model/Model";
import {NotFoundError} from "../Frontend/FrontendError";

/**
 * Example/test backend which stores data in the memory
 */
export default class MemoryBackend implements BackendInterface {
    /**
     * All models are stored here
     */
    protected storage: { [index: string]: { [index: string]: Model } } = {};

    /**
     * Generate space in memory storage for models
     *
     * @param name
     */
    protected generateNamespace(name: string) {
        if (typeof this.storage[name] === "undefined") {
            this.storage[name] = {};
        }
    }

    /**
     * Save a model in memory by id
     *
     * @param model
     */
    create(model: Model): boolean {
        if (model.id === null) {
            model.id = this.generateId(model.getName());
        }

        this.generateNamespace(model.getName());

        this.storage[model.getName()][model.id] = model;
        return true;
    }

    /**
     * Update a model
     *
     * @param model
     */
    update(model: Model): boolean {
        if (!this.get(model)) {
            return false;
        }

        return this.create(model);
    }

    /**
     * Get a model from memory by id
     *
     * @param model
     * @param callback
     */
    get(model: Model, callback: any = () => {}): boolean {
        this.generateNamespace(model.getName());

        if (model.id === null) {
            callback(new NotFoundError("Object " + model.getName() + "/" + model.id + " not found."));
            return false;
        }

        if (typeof this.storage[model.getName()][model.id] !== "undefined") {
            Object.assign(model, this.storage[model.getName()][model.id]);
            callback(null, model);
            return true;
        }

        callback(new NotFoundError("Object " + model.getName() + "/" + model.id + " not found."));
        return false;
    }

    /**
     * Delete a model from memory by id
     *
     * @param model
     */
    delete(model: Model): boolean {
        this.generateNamespace(model.getName());

        if (typeof model.id === "string") {
            delete this.storage[model.getName()][model.id];
            return true;
        }
        return false;
    }

    /**
     * Generate a random id string that isn't used yet
     */
    protected generateId(namespace: string): string {
        this.generateNamespace(namespace);
        let id: string;
        do {
            id = Math.random().toString(36).substring(8);
        } while (typeof this.storage[namespace][id] !== "undefined");
        return id;
    }
}