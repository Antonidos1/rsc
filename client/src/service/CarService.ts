import api from "../http/connect";
import { global_urls } from "../config/urls";



export default class CarService {

    static async getCarsData() {
        return api.get(global_urls.GET_CAR)
    }

    static async inputCar(data) {
        api.post(global_urls.INSERT_CAR, data)
    }

    static async deleteCar(id) {
        api.delete(global_urls.DELETE_CAR + `${id}`)
    }
}