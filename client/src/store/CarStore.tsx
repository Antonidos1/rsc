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
        CarService.deleteCar(id).then(res => {
            this.cars = this.cars.filter(value => {
                return value.id != id
            })
        })
    }

    async getCarData() {        
        this.cars = (await CarService.getCarsData()).data       
    }
}