import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// My getMaxFunction:
function getMaxPrice(price: PriceBracket): number {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      throw new Error("Invalid PriceBracket");
  }
};

/// My getOrders() function:
function getOrders(price: PriceBracket, orders: Order[][]) {
  let filteredOrders: Order[][] = [];

  orders.forEach((restaurant) => {
    const filteredForRestaurant =
    restaurant.filter((order) => order.price <= getMaxPrice(price));
      filteredOrders.push(filteredForRestaurant
      );
  });
  return filteredOrders;
}

/// My printOrders() function:
function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]) {
  filteredOrders.forEach((order, index) => {
    if (order.length > 0) {
      console.log(`${restaurants[index].name}`);
      order.forEach((item) => {console.log(`- ${item.name}: $${item.price}`);
      });
    }
  });
}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);

printOrders(restaurants, elligibleOrders);
