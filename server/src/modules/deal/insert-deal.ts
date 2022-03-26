import { DealRepository } from "./repository/deal.repositoy";
import { Request } from "express";
import { Deal } from "../../models/deal";

export class InsertDeal{

    private rep: DealRepository

    constructor() {
        this.rep = new DealRepository
    }

    async run(req: Request) {
        let dealInfo = req.body
        const deal: Deal = {
            id: 1,
            car_id: dealInfo.car_id,
            price: dealInfo.price,
            status: `for_sale`
        }
        await this.rep.insertDeal(dealInfo)
    }
} 