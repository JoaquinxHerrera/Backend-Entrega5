import mongoose from "mongoose";
import { MONGODB_CNX_STR } from "../../config.js";


await mongoose.connect(MONGODB_CNX_STR)
console.log('base de datos conectada')

export {productsManager} from './Product.js'
export {cartsManager} from './Cart.js'
export {messagesManager} from './Message.js'