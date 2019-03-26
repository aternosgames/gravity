import FrontendInterface from "./FrontendInterface";
import {EventEmitter} from "events";
import ModelList from "../Model/ModelList";

/**
 * Basic frontend implementation, can be extended to create a frontend
 */
export default abstract class Frontend extends EventEmitter implements FrontendInterface {
    protected models: ModelList = {};

    init(models: ModelList): boolean {
        this.models = models;
        return true;
    }

    abstract start(): boolean;
}