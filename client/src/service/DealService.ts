import api from "../http/connect";
import { global_urls } from "../config/urls";


export default class DealService{

    static async putUpForSale(data) {
        api.post(global_urls.INSERT_DEAL,data)
    }
    
    static async updateStatus(id, data) {
        return api.post(global_urls.UPDATE_STATUS+`${id}`, data)
    }

    static async updatePrice(id, data) {
        return api.post(global_urls.UPDATE_PRICE+id, data)
    }
    static async getDeals() {
        return api.get(global_urls.GET_DEALS)
    }
    
}