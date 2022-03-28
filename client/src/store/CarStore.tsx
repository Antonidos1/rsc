import React from 'react'
import { action, makeAutoObservable, observable} from 'mobx'
import CarService from '../service/CarService'


export interface Car {
    id?: number
    mark: string,
    model: string,
    horsepower: number,
    year: number,
    country: string
}

export class CarStore{
    constructor() {
        makeAutoObservable(this, {
            deleteCar: action,
            cars: observable,
            getCarData: action
        })
        this.getCarData()
    }
    cars: Car[]

    deleteCar(id: number) {
        console.log(`ID = ${id}`,);
        this.cars = this.cars.filter(value => {
            console.log(value.id);
            return value.id != id
        })
        CarService.deleteCar(id)
    }

    async getCarData() {        
        this.cars = (await CarService.getCarsData()).data       
    }
}