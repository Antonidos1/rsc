import { CarRepository } from './repository/car.repository'

export class GetCars {
    private rep: CarRepository;

    constructor() {
        this.rep = new CarRepository
    }

    async run(): Promise<any> {
        return await this.rep.getCars();
    }
}