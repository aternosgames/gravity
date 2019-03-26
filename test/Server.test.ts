import Server from "../src/Server";
import RestFrontend from "../src/Frontend/RestFrontend";
import Model from "../src/Model/Model";

class TestModel extends Model {
    static getName(): string {
        return "test";
    }

    getName(): string {
        return TestModel.getName();
    }

    public test: string | null = null;
}

test("server start", () => {
    let server: Server = new Server();
    server.registerModel(TestModel);
    server.registerFrontend(new RestFrontend);
    server.start();
});