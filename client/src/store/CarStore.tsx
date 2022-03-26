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
            car: observable,
            getCarData: action
        })
        this.getCarData()
    }
    car: Car[]

    deleteCar(id: number) {
        console.log(`ID = ${id}`,);
        this.car = this.car.filter(value => {
            console.log(value.id);
            return value.id != id
        })
        CarService.deleteCar(id)
    }

    async getCarData() {        
        this.car = (await CarService.getCarsData()).data       
    }
}