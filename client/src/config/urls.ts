export const SERVER_DOMAIN = "http://localhost:4001";

export const global_urls = {
    GET_CAR: SERVER_DOMAIN + '/car/get',
    INSERT_CAR: SERVER_DOMAIN + '/car/insert',
    DELETE_CAR: SERVER_DOMAIN + '/car/delete?id=',

    GET_DEALS: SERVER_DOMAIN + '/deal/get',
    INSERT_DEAL: SERVER_DOMAIN + '/deal/insert',
    CANCEL_DEAL: SERVER_DOMAIN + '/deal/cancel?id=',
    BUY_CAR: SERVER_DOMAIN + '/deal/buy?id='
}