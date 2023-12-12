import { Schema, model } from 'mongoose';
import {randomUUID} from 'node:crypto'


const cartSchema = new Schema({
    _id: {type: String, default:()=> randomUUID()},
    products: {
        type: [
            {
                _id: false,
                product: {type: String, ref: 'products'},
                quantity: {type: Number, min:1, default:1}
            }
    ],
    default:[]},
    
},{
    strict: 'throw',
    versionKey: false,
})

export const cartsManager = model('carts', cartSchema)
