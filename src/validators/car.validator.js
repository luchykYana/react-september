import Joi from 'joi';

export const CarValidator = Joi.object({
    model: Joi
        .string()
        .min(1)
        .max(20)
        .trim()
        .regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,20}$'))
        .required()
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
            'string.min': 'мінімальна кількість символів 1',
            'string.max': 'максимальна кількість символів 20',
            'string.pattern.base': 'тільки українські, російські та англійські літери'
        }),

    price: Joi
        .number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            'number.base': 'поле є обов\'язковим для заповнення',
            'number.min': 'мінімальне число 0',
            'number.max': 'максимальне число 1000000'
        }),

    year: Joi
        .number()
        .min(1990)
        .max(new Date().getFullYear())
        .required()
        .messages({
            'number.base': 'поле є обов\'язковим для заповнення',
            'number.min': 'мінімальний рік: 1900',
            'number.max': 'максимальний рік: поточний'
        })
});
