import { DealRepository } from "./repository/deal.repositoy";
import { Request } from "express";

export class UpdatePrice {

    private rep: DealRepository

    constructor() {
        this.rep = new DealRepository
    }

    async run(req: Request) {
        const id: any = req.query.id
        const price: any = req.query.price
        await this.rep.updatePrice(id, price)
    }
} 