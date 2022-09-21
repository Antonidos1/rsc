import { connection } from '../../../db/connection'
import { Auto} from '../../../models/auto'

export class CarRepository {


    async getCars() {
        return await connection.sqlQuery(`SELECT car.id , mark.name AS mark,
        model.name AS model, car.horsepower AS hp, car.year AS year, country.name AS country FROM car
        JOIN model ON model.id = car.model_id
        JOIN mark ON mark.id = car.mark_id
        JOIN country ON country.id = mark.country_id`)
    }

    async insertCar(auto: Auto) {
        delete auto['id']
        return await connection.insertAndGetID('car',auto)
    }

    async deleteCar(id: number) {
        try {
            return await connection.sqlQuery(`
        DELETE FROM deal WHERE car_id = ${id}; DELETE FROM car WHERE id = ${id}`)
        } catch(e) {
            console.log(e);   
        }
    }

    async getIdOrInsert(obj: any, table: string): Promise<number> {
        const result = await connection.sqlQuery(`SELECT * FROM ${table} WHERE ${this.createCondition(obj)} LIMIT 1`)
        if (result[0]) {
            return result[0]['id']
        }
        else {
            return (await connection.insertAndGetID(table, obj))!
        }
    }

    createCondition(obj: any): string {
        let str: string[] = []
        Object.keys(obj).forEach((value) => {
            str.push(`${value} = '${obj[`${value}`]}'`)
            str.push('AND')
        })
        str.pop()
        return str.join(' ')
    }

}