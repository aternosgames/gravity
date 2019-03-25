import ValidatorInterface from "./ValidatorInterface";

/**
 * Basic validator implementation, can be extended to create validators
 */
export default abstract class Validator implements ValidatorInterface {
    /**
     * The value to validate
     */
    protected value: any;

    /**
     * Pass the value to the constructor and run any validation functions after that
     *
     * @param value
     */
    constructor(value: any) {
        this.value = value;
    }
}