import api from "../http/connect";
import { global_urls } from "../config/urls";


export default class DealService{

    static async putUpForSale(data) {
        api.post(global_urls.INSERT_DEAL,data)
    }
}