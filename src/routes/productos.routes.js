import { PrismaClient } from '@prisma/client';
import {Router} from 'express'
const prisma = new PrismaClient;
const router = Router();

router.get('/productos', async (req, res)=>{
    const productos = await prisma.producto.findMany();
    res.json(productos);
})
export default router;