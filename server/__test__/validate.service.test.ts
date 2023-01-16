import Joi from "joi";

import { validateObject } from "../services/validate.service";

const schema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
});

describe("Validate Service", () => {
  it("should return true when obj is valid", async () => {
    const obj = {
      name: "test",
      age: 1,
    };

    const isValid = await validateObject(obj, schema);

    expect(isValid).toBe(true);
  });

  it("should return false when obj is invalid", async () => {
    const obj = {
      name: "test",
    };

    const isValid = await validateObject(obj, schema);

    expect(isValid).toBe(false);
  });
});
