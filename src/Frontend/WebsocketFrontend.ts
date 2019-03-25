import Frontend from "./Frontend";

/**
 * Websocket frontend to execute all operations via a single web socket
 */
export default class WebsocketFrontend extends Frontend {
    start(): boolean {
        return false;
    }
}