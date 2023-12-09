import { Schema, model } from 'mongoose';
import {randomUUID} from 'node:crypto'

const productSchema = new Schema({
    _id: {type: String, default: randomUUID},
    title: {type: String, required: true},
    description: {type: String},
    code: {type: Number, required: true, unique: true},
    price: {type: String, required: true},
    status: {type: Boolean},
    stock: {type: Number, required: true},
    category: {type: String},
    thumbnail: {type: String}
},{
    strict: 'throw',
    versionKey: false,
    methods: {
    }
})

export const productsManager = model('products', productSchema)
