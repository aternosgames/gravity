import {EventEmitter} from "events";
import {FrontendEvent} from "./FrontendEvent";
import ModelList from "../Model/ModelList";

/**
 * A frontend accepts requests and emits events accordingly
 */
export default interface FrontendInterface extends EventEmitter {
    /**
     * Start the frontend, e.g. start listening on a port
     */
    start(): boolean;

    /**
     * Initialize the frontend, e.g. define routes
     *
     * @param models
     */
    init(models: ModelList): boolean

    /**
     * Emit frontend events
     *
     * @param event
     * @param listener
     */
    on(event: FrontendEvent, listener: (...args: any[]) => void): this;
}