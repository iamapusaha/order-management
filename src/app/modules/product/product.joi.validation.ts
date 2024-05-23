import Joi from 'joi';

// Define the variants schema
const variantsSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

// Define the product schema
const productValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
  }),
  description: Joi.string().required().messages({
    'any.required': 'Description is required',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required',
  }),
  category: Joi.string().required().messages({
    'any.required': 'Category is required',
  }),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(variantsSchema),
  inventory: Joi.object(),
});

export default productValidationSchema;
