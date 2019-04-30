import Model from "../Model/Model";

/**
 * A backend is used by the models to access/store data
 */
export default interface BackendInterface {
    /**
     * Insert/create a model
     *
     * @param model
     */
    create(model: Model): boolean;

    /**
     * Update a model
     *
     * @param model
     */
    update(model: Model): boolean;

    /**
     * Get a model by id, update model object on success
     *
     * @param model
     * @param callback
     */
    get(model: Model, callback: any): boolean;

    /**
     * Delete a model by id
     *
     * @param model
     */
    delete(model: Model): boolean;
}