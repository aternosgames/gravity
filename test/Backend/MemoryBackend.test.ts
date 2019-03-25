import Model from "../../src/Model/Model";
import MemoryBackend from "../../src/Backend/MemoryBackend";

class TestModel extends Model {
    getName(): string {
        return "test";
    }

    public test: string | null = null;
}

test('create model', () => {
    let test: TestModel = new TestModel();
    test.test = "test";

    let backend = new MemoryBackend();
    expect(backend.create(test)).toBe(true);
});


test('get model', () => {
    let test: TestModel = new TestModel();
    test.test = "test";

    let backend = new MemoryBackend();
    expect(backend.create(test)).toBe(true);

    let getTest: TestModel = new TestModel();
    getTest.id = test.id;
    expect(backend.get(getTest)).toBe(true);

    expect(getTest.test).toBe("test");
});

test('update model', () => {
    let test: TestModel = new TestModel();
    test.test = "test";

    let backend = new MemoryBackend();
    expect(backend.create(test)).toBe(true);

    test.test = "different";
    expect(backend.update(test)).toBe(true);

    let getTest: TestModel = new TestModel();
    getTest.id = test.id;
    expect(backend.get(getTest)).toBe(true);

    expect(getTest.test).toBe("different");
});

test('delete model', () => {
    let test: TestModel = new TestModel();
    test.test = "test";

    let backend = new MemoryBackend();
    expect(backend.create(test)).toBe(true);

    let getTest: TestModel = new TestModel();
    getTest.id = test.id;
    expect(backend.get(getTest)).toBe(true);
    expect(getTest.test).toBe("test");

    expect(backend.delete(test)).toBe(true);
    let deleteTest: TestModel = new TestModel();
    deleteTest.id = test.id;
    expect(backend.get(deleteTest)).toBe(false);
});