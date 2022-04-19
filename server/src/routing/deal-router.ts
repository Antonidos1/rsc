import { Router } from "express";
import { UpdateStatus } from "../modules/deal/update-status";
import { GetDeals } from "../modules/deal/get-deals";
import { InsertDeal } from "../modules/deal/insert-deal";
import { UpdatePrice } from "../modules/deal/update-price";

export const dealRouter = Router()

const getDeals = new GetDeals
const insertDeal = new InsertDeal
const updatePrice = new UpdatePrice
const updateStatus = new UpdateStatus

dealRouter.get('/get', async (req, res) => {
    try {
        return res.status(200).json(await getDeals.run())
    }
    catch (e) {
        return res.status(400).json({message: e})
    }
})

dealRouter.post('/insert', async (req, res) => {
    try {
        await insertDeal.run(req)
        return res.status(200).json({ message: 'Car successfully put up for sale'})
    }
    catch (e) {
        return res.status(400).json({ message: e })
    }
})

dealRouter.post('/update-status', async (req, res) => {
    try {
        await updateStatus.run(req)
        return res.status(200).json({ message: 'Deal succesfully cancelled' })
    } catch (e) {
        return res.status(400).json({ message: e })
    }
})

dealRouter.post('/update-price', async (req, res) => {
    try {
        await updatePrice.run(req)
        return res.status(200).json({ message: 'Price successfully updated' })
    } catch (e) {
        return res.status(400).json({ message: e })
    }
})
