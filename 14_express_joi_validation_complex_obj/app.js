const Joi = require('joi')

// 1. arrayString - just an array, not key-value pairs:
//
// const arrayString = ['banana', 'bacon', 'cheese']
// const userInput = { personalInfo : {
//     streetAddress: '123456784',
//     city: 'asfasf',
//     state: 'fl'
//     },
//     preferences : arrayString
// }

// // BUilding a schema:

// const personalInfoSchema = Joi.object().keys({  // NOTE: should be "object()""
//     streetAddress : Joi.string().trim().required(),
//     city : Joi.string().trim().required(),
//     state : Joi.string().length(2).required()
// });

// const preferencesSchema = Joi.array().items(Joi.string());

// const schema = Joi.object().keys({     // NOTE: should be "object()"
//     personalInfo : personalInfoSchema,
//     preferences : preferencesSchema
// })

// Joi.validate(userInput, schema, (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result)
//     }
// })

// 2. Arrya string replaced with arrayObjects (an array of key-value pairs)
const arrayObjects = [{example: 'example1'}, {example: 'example2'}]
const userInput = { personalInfo : {
    streetAddress: '123456784',
    city: 'asfasf',
    state: 'fl'
    },
    preferences : arrayObjects
}

// BUilding a schema:

const personalInfoSchema = Joi.object().keys({  // NOTE: should be "object()""
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().length(2).required()
});

const preferencesSchema = Joi.array().items(
    //Joi.string()

        Joi.object().keys({
            example : Joi.string().min(3).required()
        })
        
    );

const schema = Joi.object().keys({     // NOTE: should be "object()"
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
})

Joi.validate(userInput, schema, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})
