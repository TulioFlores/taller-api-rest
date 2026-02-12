import { PrismaClient } from '@prisma/client';
import {Router} from 'express'
const prisma = new PrismaClient;
const router = Router();

router.get('/productos', async (req, res)=>{
    const productos = await prisma.producto.findMany();
    res.json(productos);
});

router.get('/productos/:id', async (req, res)=>{
    const productoId = parseInt(req.params.id)
    const productoEncontrado  = await prisma.producto.findFirst({
        where:{
            id: productoId
        }
    });
    res.json(productoEncontrado);
});
router.post('/productos', async (req, res)=>{
    try{
        const nuevoProducto = await prisma.producto.create({
            data: req.body
        });
        res.status(201).json({
            "msg": "Se agregó el producto exitosamente"
        });  
    }catch(error){  
        res.status(500).json({
            "msg1": error.message,
            "msg2": error.meta
        });  
    }
});

export default router;