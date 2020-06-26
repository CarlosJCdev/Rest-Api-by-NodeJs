import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();
import indexRoutes from './routes/index';

/* //Settings, indicamos que si existe un puerto en donde quiera que sea el despliegue, que lo tome
o toma el puerto 4000 */
app.set('port', process.env.PORT || 4000);

//middlewares, morgan es uno
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', indexRoutes);

//the folder public is used by public files
app.use('/public', express.static(path.resolve('public')));

export default app;