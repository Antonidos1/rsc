import { Router } from "express";
import { BuyCar } from "../modules/deal/buy-car";
import { CancellDeal } from "../modules/deal/cancell-deal";
import { GetDeals } from "../modules/deal/get-deals";
import { InsertDeal } from "../modules/deal/insert-deal";
import { UpdatePrice } from "../modules/deal/update-price";

export const dealRouter = Router()

const getDeals = new GetDeals
const buyCar = new BuyCar
const cancellDeal = new CancellDeal
const insertDeal = new InsertDeal
const updatePrice = new UpdatePrice

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

dealRouter.post('/cancel', async (req, res) => {
    try {
        await cancellDeal.run(req)
        return res.status(200).json({ message: 'Deal succesfully cancelled' })
    } catch (e) {
        return res.status(400).json({ message: e })
    }
})

dealRouter.post('/buy', async (req, res) => {
    try {
        await buyCar.run(req)
        return res.status(200).json({ message: 'Car successfully purchased' })
    } catch (e) {
        return res.status(400).json({ message: e })
    }
})

dealRouter.post('/update', async (req, res) => {
    try {
        await updatePrice.run(req)
        return res.status(200).json({ message: 'Price successfully updated' })
    } catch (e) {
        return res.status(400).json({ message: e })
    }
})
