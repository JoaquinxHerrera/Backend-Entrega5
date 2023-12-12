import { json, Router, urlencoded } from "express";
import { cartsRouter } from "./carts.router.js";
import { productsRouter } from "./products.router.js";

export const apiRouter = Router()

apiRouter.use(json(), urlencoded({extended:true}))

apiRouter.use('/products', productsRouter)
apiRouter.use('/carts', cartsRouter)
