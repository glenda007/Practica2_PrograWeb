import express from 'express';
import routes from './routes/index.route.js';
import dotenv from 'dotenv';
import { connectDB } from './configs/mongoose.config.js';
import i18nMiddleware from './middlewares/i18n.middleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(i18nMiddleware);

app.use("/",routes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    throw error;
  }
};

startServer();
