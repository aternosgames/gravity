import StringValidator from "../../src/Validator/StringValidator";

test('type validation', () => {
    new StringValidator("string");
    expect(() => {
        let value: any = 12345;
        new StringValidator(value);
    }).toThrowError();
});

test('maximum length validation', () => {
    new StringValidator("string").max(6);
    new StringValidator("string").max(10);
    expect(() => {
        new StringValidator("string").max(5);
    }).toThrowError();
});

test('minimum length validation', () => {
    new StringValidator("string").min(6);
    new StringValidator("string").min(0);
    expect(() => {
        new StringValidator("string").min(7);
    }).toThrowError();
});