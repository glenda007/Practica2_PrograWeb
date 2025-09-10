import express from 'express';
import routes from './routes/index.route.js';
import dotenv from 'dotenv';
import { connectToMongo } from './configs/mongoose.config.js';
import i18nMiddleware from './middlewares/i18n.middleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(i18nMiddleware);

app.use("/", routes);

const startServer = async () => {
  try {
    await connectToMongo();
    app.listen(port, () => console.log('Servidor iniciado'));
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);  
  }
}

startServer();