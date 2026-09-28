import express, {Request, Response} from 'express';
import dotenv from 'dotenv'

// Load environment variables
dotenv.config();

// Create the Express application
const app = express();
const PORT: number = Number(process.env.PORT) || 3000

// Define a route: when someone visits the homepage, send them a greeting
app.get('/', (req: Request, res:Response) => {
    res.send('Welcome to my Express server')
}) ;

app.get('/birthday', (req: Request, res:Response) => {
    let birthday = new Date();
    res.send(`${birthday.getDate} & ${birthday.getTime}`)
}) ;

// Start the server and begin listening for resquests
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})