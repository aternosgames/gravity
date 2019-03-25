import Validator from "./Validator";
import {StringInvalidTypeError, StringTooLongError, StringTooShortError} from "./ValidatorError";

/**
 * Validate strings
 */
export default class StringValidator extends Validator {
    /**
     * Constructor with type check
     *
     * @param value
     */
    constructor(value: string) {
        if (typeof value !== "string") {
            throw new StringInvalidTypeError("Invalid type. Expected 'string', got '" + typeof value + "'.");
        }
        super(value);
    }

    /**
     * Validate the maximum length of the string
     *
     * @param length
     */
    public max(length: number) {
        if (this.value.length > length) {
            throw new StringTooLongError("Value is longer than allowed maximum length: " + this.value.length + " > " + length);
        }
    }

    /**
     * Validate the minimum length of the string
     *
     * @param length
     */
    public min(length: number) {
        if (this.value.length < length) {
            throw new StringTooShortError("Value is shorter than allowed minimum length: " + this.value.length + " < " + length);
        }
    }
}