import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { carRouter } from './routing/car-router';
import { dealRouter } from './routing/deal-router';
import cors from 'cors'
    
const PORT = process.env.PORT || 4001

const app = express()
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use('/car', carRouter)
app.use('/deal', dealRouter)

app.use((req: Request, res: Response) => {
    res.status(404).send("<h1>ERROR 404 <br/> PAGE NOT FOUND</h1>")
})

async function start() {
    try {
        app.listen(PORT, () => {
            console.log("RUNNING ON PORT 4001");
        })
    } catch (e) {
        console.log(e);
    }
}

start()

