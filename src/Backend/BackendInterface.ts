import ModelInterface from "../Model/ModelInterface";

/**
 * A backend is used by the models to access/store data
 */
export default interface BackendInterface {
    /**
     * Insert/create a model
     *
     * @param model
     */
    create(model: ModelInterface): boolean;

    /**
     * Update a model
     *
     * @param model
     */
    update(model: ModelInterface): boolean;

    /**
     * Get a model by id, update model object on success
     *
     * @param model
     */
    get(model: ModelInterface): boolean;

    /**
     * Delete a model by id
     *
     * @param model
     */
    delete(model: ModelInterface): boolean;
}