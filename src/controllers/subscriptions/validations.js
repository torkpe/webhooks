import Joi from 'joi';

export default {
  subscribe: {
    body: {
      schema: Joi.object({
        url: Joi.string().uri().required().trim(),
      })
    },
    params: {
      schema: Joi.object({
        id: Joi.number()
      })
    }
  },
  publish: {
    body: {
      schema: Joi.object({
        data: Joi.object()
      })
    },
    params: {
      schema: Joi.object({
        id: Joi.number()
      })
    }
  }
}

