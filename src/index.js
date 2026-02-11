import express from 'express'
import productosRutas from './routes/productos.routes.js';
import categoriasRutas from './routes/categorias.routes.js';
import { PrismaClient } from '@prisma/client';

const app = express()
app.use(express.json())
const prisma = new PrismaClient;
app.use("/api", productosRutas);
app.use("/api", categoriasRutas);
app.listen(3000);
console.log("Servidor ejecutanto en el puerto 3000");
