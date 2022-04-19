import React from 'react'
import mobx, { action, makeAutoObservable, observable } from 'mobx'
import DealService from '../service/DealService'

export interface Deal {
    id: number,
    car_id: number,
    price: number,
    status: string
}

export default class DealStore {

    constructor() {
        makeAutoObservable(this, {
            deals: observable,
            getDeals: action,
            updatePrice: action,
            updateStatus: action
        })
        this.getDeals()
    }

    deals: Deal[] = []
    modalActive: boolean

    getDeals = async () => {
        this.deals = (await DealService.getDeals()).data
    }

    updateStatus = (id: number, data: string) => {
        DealService.updateStatus(id, { status: data }).then(res => {
            let ind = this.deals.findIndex(value => value.id == id)
            this.deals[ind].status = data
        })
    }

    updatePrice = (id: number, price: number) => {
        DealService.updatePrice(id, { price: price }).then(res => {
            console.log(id)
            let ind = this.deals.findIndex(value => value.id == id)
            this.deals[ind].price = price 
        })
    }

    putUpForSale = (id: number, price: number) => {
        console.log(this.deals)
        let exDeal = (this.deals.find(deal => deal.car_id == id))
        console.log(this.deals)
        if (!exDeal) {
            DealService.putUpForSale({ car_id: id, price: price })
            return true
        }
        else return false
    }
}