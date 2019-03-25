/**
 * Various validator error types
 */
export class ValidatorError extends Error {}
export interface InvalidTypeErrorInterface extends ValidatorError {}

export class StringValidatorError extends ValidatorError {}
export class StringInvalidTypeError extends StringValidatorError implements InvalidTypeErrorInterface {}
export class StringTooLongError extends StringValidatorError {}
export class StringTooShortError extends StringValidatorError {}
