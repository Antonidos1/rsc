import { DealRepository } from "./repository/deal.repositoy";

export class GetDeals {

    private rep: DealRepository

    constructor() {
        this.rep = new DealRepository
    }

    async run() :Promise<any> {        
        return await this.rep.getDeals();
    }
} 