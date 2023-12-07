import { Schema, model } from 'mongoose';
// import {randomUUID} from 'node:crypto'

const messageSchema = new Schema({
    content: {type: String},
    date: {type: Date, default: ()=> new Date().toLocaleString()}
    
},{
    strict: 'throw',
    versionKey: false,
})

export const messagesManager = model('messages', messageSchema)