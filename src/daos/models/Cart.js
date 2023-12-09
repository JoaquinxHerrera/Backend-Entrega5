import { Schema, model } from 'mongoose';
import {randomUUID} from 'node:crypto'


const cartSchema = new Schema({
    _cid: {type: String, default: randomUUID},
    products: {type: [String], default: []},
    
},{
    strict: 'throw',
    versionKey: false,
    statics:{
        getCarts: async function(){
            return await model('carts').find().lean()
        }
    },
    methods:{

    },
})

export const cartsManager = model('carts', cartSchema)
