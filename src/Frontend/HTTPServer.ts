import * as express from "express";

/**
 * HTTP server used by RestFrontend and WebsocketFrontend
 */
export default class HTTPServer {
    protected static instance: HTTPServer | null = null;

    /**
     * Get singleton instance of HTTPServer
     */
    public static getInstance(): HTTPServer {
        if (this.instance === null) {
            this.instance = new HTTPServer();
        }

        return this.instance;
    }

    public app: express.Application = express();

    /**
     * Check if the http server was already started
     */
    protected running: boolean = false;

    /**
     * The HTTP server listens on this port
     */
    public port: number = 8080;

    /**
     * Use getInstance() instead
     */
    protected constructor() {

    }

    /**
     * Start the HTTP server
     */
    public start(): boolean {
        if (this.running) {
            return true;
        }

        this.running = true;
        this.app.listen(this.port);
        return true;
    }
}