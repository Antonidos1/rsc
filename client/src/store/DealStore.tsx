import React from 'react'
import mobx, { makeAutoObservable } from 'mobx'
import DealService from '../service/DealService'

export interface Deal {
    id?: number
    car_id: number,
    price: number,
    status: string
}

export default class DealStore {

    constructor() {
        makeAutoObservable(this, {

        })
    }

    deals: Deal[] = []
    modalActive: boolean

    deleteDeal = (id) => {

    }

    putUpForSale = (id, price) => {
        let exDeal = this.deals.find(deal => { deal.id == id })
        if (exDeal) {
            DealService.putUpForSale({ car_id: id, price: price })
            return true
        }
        else return false
    }
}