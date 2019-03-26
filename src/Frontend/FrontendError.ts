/**
 * Various validator error types
 */
export class FrontendError extends Error {}
export class ModelNotFoundError extends FrontendError {}
export class RequiredIdNotFoundError extends FrontendError {}