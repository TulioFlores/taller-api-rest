import express from 'express'
import productosRutas from './routes/productos.rutas.js';
import categoriasRutas from './routes/categorias.rutas.js';

const app = express()
app.use(express.json())

app.use("/api", productosRutas);
app.use("/api", categoriasRutas);
app.listen(3000);
console.log("Servidor ejecutanto en el puerto 3000");
