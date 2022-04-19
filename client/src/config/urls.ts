export const SERVER_DOMAIN = "http://localhost:4001";

export const global_urls = {
    GET_CAR: SERVER_DOMAIN + '/car/get',
    INSERT_CAR: SERVER_DOMAIN + '/car/insert',
    DELETE_CAR: SERVER_DOMAIN + '/car/delete?id=',

    GET_DEALS: SERVER_DOMAIN + '/deal/get',
    INSERT_DEAL: SERVER_DOMAIN + '/deal/insert',    
    UPDATE_STATUS: SERVER_DOMAIN + '/deal/update-status?id=',
    UPDATE_PRICE: SERVER_DOMAIN +'/deal/update-price?id='
}