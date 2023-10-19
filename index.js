"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// My getMaxFunction:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
        default:
            throw new Error("Invalid PriceBracket");
    }
}
;
/// My getOrders() function:
function getOrders(price, orders) {
    let filteredOrders = [];
    orders.forEach((restaurant) => {
        const filteredForRestaurant = restaurant.filter((order) => order.price <= getMaxPrice(price));
        filteredOrders.push(filteredForRestaurant);
    });
    return filteredOrders;
}
/// My printOrders() function:
function printOrders(restaurants, filteredOrders) {
    filteredOrders.forEach((order, index) => {
        if (order.length > 0) {
            console.log(`${restaurants[index].name}`);
            order.forEach((item) => {
                console.log(`- ${item.name}: $${item.price}`);
            });
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
