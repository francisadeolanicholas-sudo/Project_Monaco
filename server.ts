import express, {Request, Response} from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000

app.get('/', (req: Request, res:Response) => {
    res.send('Welcome to my Express server')
}) ;

app.get('/birthday', (req: Request, res:Response) => {
    const birthday = new Date();
    res.send(`Current date is ${birthday.getFullYear()}/${birthday.getMonth() + 1}/${birthday.getDate()} & Current time is ${birthday.getHours()}:${birthday.getMinutes()}`)
}) ;

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})