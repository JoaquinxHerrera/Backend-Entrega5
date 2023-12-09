import { json, Router, urlencoded } from "express";
import { productsRouter } from "./products.router.js";

export const apiRouter = Router()

apiRouter.use(json(), urlencoded({extended:true}))

apiRouter.use('/products', productsRouter)
