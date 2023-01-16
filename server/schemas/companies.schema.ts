import Joi from "joi";
import { Services } from "../interfaces/types";

export const CompanySchema = Joi.object().keys({
  name: Joi.string().required(),
  logo: Joi.string().required(),
  services: Joi.array()
    .items(Joi.string().valid(...Object.values(Services)))
    .min(1),
  country: Joi.string().required(),
});

export const CompaniesSchema = Joi.array().items(CompanySchema);
