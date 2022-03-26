import React from 'react'
import mobx, { makeAutoObservable } from 'mobx'

export interface Deal {
    id?: number
    car_id: number,
    price: number,
    status: string
}

export class DealStore{

    constructor() {
        makeAutoObservable(this,{

        })
    }

    deal: Deal[] = []
    
}