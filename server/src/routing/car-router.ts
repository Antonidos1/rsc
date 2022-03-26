import { Router } from "express"
import { DeleteAuto } from "../modules/auto/delete-auto";
import { GetCars } from "../modules/auto/get-cars";
import { InsertAuto } from "../modules/auto/insert-auto";

export const carRouter = Router();


const deleteAuto = new DeleteAuto
const insertAuto = new InsertAuto
const getCars = new GetCars


carRouter.post('/insert', async (req, res) => {
    try {
        await insertAuto.run(req)
        return res.status(200).json({ message: "Insert Succesfully" })
    } catch (e) {
        return res.status(400).json({ message: `${e}`})
    }
})
carRouter.delete('/delete',async  (req, res) => {
    try {
        await deleteAuto.run(req);
        return res.status(200).json({ message: "Delete succesfully" })
    }
    catch (e) {
        return res.status(400).json({ message: `${e}` })
    }
})
carRouter.get('/get', async (req, res)=>{
    try {        
        return res.status(200).json(await getCars.run())
    }
    catch (e) {
        return res.status(400).json({ message: `${e}` })
    }
})