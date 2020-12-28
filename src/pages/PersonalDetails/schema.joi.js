import Joi from 'joi';

const now = Date.now();
const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18)); 

export default Joi.object({
  firstName: Joi
    .string()
    .alphanum()
    .required()
    .options({
      messages: {
        'any.required': 'Oops. Seems like you forgot to fill your first name!',
        'string.alphanum': 'Hmm. That doesn\'t seem like a valid first name, at least to me!'
      }
    }
  ),
  lastName: Joi
    .string()
    .alphanum()
    .required()
    .options({
      messages: {
        'any.required': 'Oops. Seems like you forgot to fill your last name!',
        'string.alphanum': 'Hmm. That doesn\'t seem like a valid last name, at least to me!'
      }
    }
  ),
  dob: Joi
    .date()
    .max(cutoffDate)
    .required()
    .options({
      messages: {
        'any.required': 'Oops. Seems like you forgot to fill your date of birth!',
        'date.max': 'Uh. You need to be at least 18 to continue this journey'
      }
    }
  ),
  phone: Joi
    .string()
    .required()
    .options({
      messages: {
        'any.required': 'Oops. Seems like you forgot to fill your contact number!',
      }
    }
  ),
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .options({
      messages: {
        'any.required': 'Oops. Seems like you forgot to fill your email!',
        'string.email': ' Hmm. That doesn\'t seem like a valid email address, at least to me!'
      }
    }
  )
});
