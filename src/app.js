import express from 'express';
import eventRouter from './routes/event.router.js';
import sessionRouter from './routes/session.router.js';
import { errorHandler } from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser'
const app = express()
app.use(express.json())
app.use(cookieParser())
app.get('/api/health', (req, res) => {
  res.status(200).json({status:'ok',"message":"Servidor activo"})
})
app.use('/api/events',eventRouter)
app.use('/api/sessions',sessionRouter)
app.use(errorHandler)
export default app