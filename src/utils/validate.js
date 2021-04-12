import { BadRequestError } from "./exceptions";

const validate = async (
  schema,
  object,
  option = { abortEarly: true, allowUnknown: false }
) => {
  return await schema.validateAsync(object, option);
};

export default function validator(constraint) {
  return async (req, res, next) => {
    try {
      if (constraint.body)
        req.body = await validate(
          constraint.body.schema,
          req.body,
          constraint.body.options
        );
      if (constraint.params)
        req.params = await validate(
          constraint.params.schema,
          req.params,
          constraint.params.options
        );
      if (constraint.query)
        req.query = await validate(
          constraint.query.schema,
          req.query,
          constraint.query.options
        );
      if (constraint.headers)
        req.headers = await validate(
          constraint.headers.schema,
          req.headers,
          constraint.headers.options
        );

      return next();
    } catch (error) {
      next({
        message: error.details[0].message,
        status: 400
      })
    }
  };
}
