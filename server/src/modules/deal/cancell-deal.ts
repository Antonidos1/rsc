import { DealRepository } from "./repository/deal.repositoy";
import { Request } from "express";

export class CancellDeal {

    private rep: DealRepository

    constructor() {
        this.rep = new DealRepository
    }

    async run(req: Request) {
        let id: any = req.query.id
        await this.rep.setDealStatus('cancelled', id)
    }
} 