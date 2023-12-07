import { json, Router } from "express";
import { productsRouter } from "./products.router.js";

export const apiRouter = Router()
apiRouter.use(json())

apiRouter.use('/products', productsRouter)