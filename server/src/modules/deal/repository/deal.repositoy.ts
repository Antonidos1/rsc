import { connection } from '../../../db/connection'
import { Deal } from '../../../models/deal'

export class DealRepository {

    async getDeals() {
        await connection.sqlQuery('SELECT * FROM deal')
    }

    async insertDeal(deal: Deal) {
        delete deal['id']
        let values = Object.values(deal).join(', ');

        await connection.sqlQuery(`INSERT INTO deal VALUES ${values}`)
    }

    async updatePrice(id: number, price: number) {
        await connection.sqlQuery(`UPDATE deal SET price = ${price} WHERE id = ${id}`)
    }
    
    async setDealStatus(status: string, id: number) {
        await connection.sqlQuery(`UPDATE deal SET status = ${status} WHERE id = ${id}`)
    }

    async getIdOrInsert(obj: any, column: string, table: string): Promise<number> {
        const result = await connection.sqlQuery(`SELECT * FROM ${table} WHERE ${column} = ${obj['column']} LIMIT 1`)
        if (result[0]) {
            return result['id']
        }
        else {
            return (await connection.insertAndGetID(table, obj))!
        }
    }
}