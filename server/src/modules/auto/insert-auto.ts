import { Auto, Mark, Model, Country } from "../../models/auto";
import { Request } from "express";
import { CarRepository } from "./repository/car.repository";
import { Car } from "./dto/car.dto";

export class InsertAuto {
    
    private rep: CarRepository
    constructor() {
        this.rep = new CarRepository
    }

    async run(req: Request) {
        const autoInfo: Car = req.body
        let mark_id = await this.insertMark(autoInfo.mark, autoInfo.country)
        const auto: Auto = {
            id: 1,
            mark_id: mark_id,
            model_id: await this.insertModel(autoInfo.model, mark_id),
            horsepower: autoInfo.horsepower,
            year: autoInfo.year
        }

        await this.rep.insertCar(auto)
    }

    private async insertModel(name: string, mark_id: number): Promise<number> {
        return await this.rep.getIdOrInsert({name: name, mark_id: mark_id},'model')        
    }

    private async insertMark(name: string, country: string): Promise<number> {
        const countryObj: Country = {
            name: country
        }
        const country_id = await this.rep.getIdOrInsert(countryObj, 'country')
        return await this.rep.getIdOrInsert({
            name: name,
            country_id: country_id
        }, 'mark')
    }

}