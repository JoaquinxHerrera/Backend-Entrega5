import {Router} from 'express'
import { productsManager, cartsManager } from '../daos/mongodb.js'

export const webRouter = Router()

webRouter.get('/', async (req, res) => {
    res.redirect('/products')
})

webRouter.get('/realtimeproducts', (req,res)=>{
    res.render('realTimeProducts.handlebars', {titulo: 'Real Time Products'})
})

webRouter.get('/admin', (req,res)=>{
    res.render('admin.handlebars', {titulo: 'Admin'})
})

webRouter.get('/', async(req,res) =>{
    const products = await pm.getProducts()
    res.render('home.handlebars', {products})
})

async function handleUsuarios(req, res) {
    const usuarios = await usuariosDao.find().lean()
    res.render('usuarios.handlebars', {
      titulo: 'Usuarios',
      hayUsuarios: usuarios.length > 0,
      usuarios,
    })
  }
  