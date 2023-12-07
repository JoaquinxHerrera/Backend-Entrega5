import { Router } from "express";
import { productsManager } from "../daos/mongodb.js";

export const productsRouter = Router()

productsRouter.get('/', async(req, res) =>{
    const products = await productsManager.find().lean()
    res.json(products)
})

productsRouter.get('/:id', async(req, res) =>{
    const product = await productsManager.findById(req.params.id).lean()
    res.json(product)
})

productsRouter.post('/', async(req, res) =>{
    try{
        const product = await productsManager.create(req.body)
        res.status(201).json(product.toObject())
    } catch(error){
        res.status(400).json({message: error.message})

    }
})

productsRouter.delete('/:id', async (req, res) => {
    const borrado = await productsManager.findByIdAndDelete(req.params.id)

    if (!borrado) {
        return res.status(404).json({message: 'usuario no encontrado'})
    }
    res.json(borrado)
})

productsRouter.put('/:id', async (req, res)=>{
    const camposAActualizar = {}

    if (req.file){
        camposAActualizar.tile = req.body.title
    }
    let actualizado
    try{
        actualizado = await productsManager.findByIdAndUpdate(req.params.id, {$set: camposAActualizar}, {new: true})
    } catch(error){
        return res.status(400).json({message: error.message})
    }

    if (!actualizado){
        return res.status(404).json({ message: 'product not found'})
    }

    res.json(borrado)
})