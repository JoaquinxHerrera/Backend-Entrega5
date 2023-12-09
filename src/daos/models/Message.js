import { Schema, model } from 'mongoose';

// const emailValidator = {
//     validator: (value) => {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(value);
//     },
//     message: 'El campo user debe ser una dirección de correo electrónico válida.',
// };

const messageSchema = new Schema({
    user: {type: String, required: true},
    message: {type: String, required: true},
    timestamp: { type: Date, default: Date.now },
},{
    strict: 'throw',
    versionKey: false,
})

export const messagesManager = model('messages', messageSchema)