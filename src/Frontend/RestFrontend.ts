import Frontend from "./Frontend";
import {Request, Response} from "express";
import ModelList from "../Model/ModelList";
import HTTPServer from "./HTTPServer";
import Model from "../Model/Model";
import {ModelNotFoundError, RequiredIdNotFoundError} from "./FrontendError";
import {FrontendEvent} from "./FrontendEvent";

/**
 * Rest like HTTP frontend
 */
export default class RestFrontend extends Frontend {

    init(models: ModelList): boolean {
        super.init(models);

        let app = HTTPServer.getInstance().app;
        app.get("/:name/:id", this.get);
        app.post("/:name", this.post);
        app.put("/:name/:id", this.put);
        app.delete("/:name/:id", this.delete);

        return true;
    }

    start(): boolean {
        HTTPServer.getInstance().start();
        return true;
    }

    /**
     * Create model object based on request
     *
     * @param request
     */
    protected getModelFromRequest(request: Request): false | Model {
        let name: string = request.params.name;
        if (this.models === null || typeof this.models[name] === "undefined") {
            return false;
        }

        let modelClass = this.models[name];
        let model: Model = new modelClass();

        if (typeof request.params.id !== "undefined") {
            model.id = request.params.id;
        }

        return model;
    }

    get(request: Request, response: Response) {
        try {
            let model = this.getModelFromRequest(request);
            if (model === false) {
                RestFrontend.passErrorToResponse(response, new ModelNotFoundError("Model not found."), 400);
                return;
            }
            if (model.id === null) {
                RestFrontend.passErrorToResponse(response, new RequiredIdNotFoundError("ID is required, but not present."), 400);
                return;
            }
            this.emit(FrontendEvent.Get, model);
        } catch (error) {
            RestFrontend.passErrorToResponse(response, error);
        }
    }

    post(request: Request, response: Response) {

    }

    put(request: Request, response: Response) {

    }

    delete(request: Request, response: Response) {

    }

    static passErrorToResponse(response: Response, error: Error, code: number = 500) {
        response.status(code);
        response.json({
            success: false,
            error: error.message
        });
    }
}