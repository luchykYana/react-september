import Joi from 'joi';

export const todoValidator = Joi.object({
    todo: Joi.string().trim().min(5).required().messages({
        'string.empty': 'Поле не може бути порожнім',
        'string.min': 'Мінімальна кількість символів: 5'
    })
});
