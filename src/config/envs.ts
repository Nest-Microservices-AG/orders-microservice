import 'dotenv/config';
import * as joi from 'joi';

interface EnvironmentVars {
  PORT: number;

  PRODUCTS_MICROSERVICES_HOST: string;
  PRODUCTS_MICROSERVICES_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),

    PRODUCTS_MICROSERVICES_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICES_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config valudation error: ${error.message}`);
}

const environmentsVariables: EnvironmentVars = value;

export const envs = {
  port: environmentsVariables.PORT,
  productsMicroserviceHost: environmentsVariables.PRODUCTS_MICROSERVICES_HOST,
  productsMicroservicePort: environmentsVariables.PRODUCTS_MICROSERVICES_PORT,
};
