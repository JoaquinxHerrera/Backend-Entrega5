import { Schema, model } from 'mongoose';
import {randomUUID} from 'node:crypto'

// const emailValidator = {
//     validator: (value) => {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(value);
//     },
//     message: 'El campo user debe ser una dirección de correo electrónico válida.',
// };

const messageSchema = new Schema({
    _id: {type: String, default: randomUUID},
    user: {type: String, required: true},
    message: {type: String, required: true},
    timestamp: { type: Date, default: Date.now },
},{
    strict: 'throw',
    versionKey: false,
})

export const messagesManager = model('messages', messageSchema)