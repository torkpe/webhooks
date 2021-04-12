import Joi from 'joi';

export default {
  addChannel: {
    body: {
      schema: Joi.object({
       topic: Joi.string().required().trim(),
      })
    }
  },
}

