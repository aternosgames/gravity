import FrontendInterface from "./FrontendInterface";
import {EventEmitter} from "events";

/**
 * Basic frontend implementation, can be extended to create a frontend
 */
export default abstract class Frontend extends EventEmitter implements FrontendInterface {
    abstract start(): boolean;
}