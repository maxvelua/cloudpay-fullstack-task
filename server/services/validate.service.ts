import Joi from "joi";

export function validateObject(obj: Object, schema: Joi.Schema): boolean {
  const result = schema.validate(obj);

  if (result.error) {
    return false;
  }

  return true;
}
