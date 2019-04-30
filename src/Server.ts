/**
 * The server can run different frontends and connects them to the backend
 */
import ModelList from "./Model/ModelList";
import Model from "./Model/Model";
import FrontendInterface from "./Frontend/FrontendInterface";
import BackendInterface from "./Backend/BackendInterface";
import {FrontendEvent} from "./Frontend/FrontendEvent";
import MemoryBackend from "./Backend/MemoryBackend";

export default class Server {
    protected models: ModelList = {};
    protected frontends: Array<FrontendInterface> = [];
    protected backend: BackendInterface = new MemoryBackend();

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
     * Register a backend to be used by the server
     *
     * Default is the memory backend
     *
     * @param backend
     */
    public registerBackend(backend: BackendInterface) {
        this.backend = backend;
    }

    /**
     * Start the server by initializing and starting all registered frontends
     */
    public start(): boolean {
        for (let frontend of this.frontends) {
            frontend.init(this.models);
            frontend.start();
            frontend.on(FrontendEvent.Get, (model, callback) => {
                this.backend.get(model, callback)
            });
        }
        return true;
    }
}