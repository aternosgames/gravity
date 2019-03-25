/**
 * A model represents an object which is stored in the database
 */
export default interface ModelInterface {
    /**
     * Unique model identifier
     */
    id: string | null;

    /**
     * Get the name of the model, e.g. for backend storage purposes
     */
    getName(): string;
}