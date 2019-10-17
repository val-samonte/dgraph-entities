export class ReflectMetadataMissingError extends Error {
  constructor() {
    super(
      `Please ensure the experimental metadata is included.`
    );

    Object.setPrototypeOf(this, new.target.prototype);
  }
}