/**
 * The server can run different frontends and connects them to the backend
 */
import ModelList from "./Model/ModelList";
import Model from "./Model/Model";
import FrontendInterface from "./Frontend/FrontendInterface";

export default class Server {
    protected models: ModelList = {};
    protected frontends: Array<FrontendInterface> = [];

    /**
     * Register a model to be used by the server
     *
     * @param model
     */
    public registerModel(model: { new(): Model, getName(): string }) {
        this.models[model.getName()] = model;
    }

    /**
     * Register a frontend to be used by the server
     *
     * @param frontend
     */
    public registerFrontend(frontend: FrontendInterface) {
        this.frontends.push(frontend);
    }

    /**
     * Start the server by initializing and starting all registered frontends
     */
    public start(): boolean {
        for (let frontend of this.frontends) {
            frontend.init(this.models);
            frontend.start();
        }
        return true;
    }
}