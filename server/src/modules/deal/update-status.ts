import { DealRepository } from "./repository/deal.repositoy";
import { Request } from "express";

export class UpdateStatus {

    private rep: DealRepository

    constructor() {
        this.rep = new DealRepository
    }

    async run(req: Request) {
        let id: any = req.query.id
        const status: string = req.body.status
        await this.rep.setDealStatus(status, id)
    }
} 