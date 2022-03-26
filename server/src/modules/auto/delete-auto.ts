import {Request} from 'express'
import { CarRepository } from './repository/car.repository'

export class DeleteAuto{
    private rep: CarRepository
    constructor() {
        this.rep = new CarRepository
    }

    async run(req: Request) {
        let id: any = req.query.id
        await this.rep.deleteCar(id)     
    }
}