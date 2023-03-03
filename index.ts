import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

// Configuration
dotenv.config();

// Create Express app
const port: string | number = process.env.PORT || 3000;
const app: Express = express();

//  Rutas

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World, MERN');
});
app.get('/hello', (req: Request, res: Response) => {
	res.send('Hola mundo');
});

// Escucha
app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});
