'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  increaseCount(count) {
    this.count += count;
  },
  calculateItemPrice() {
    const goodPrice = this.items.reduce((goodsPrice, good) => {
      return goodsPrice + (good.price * good.quantity);
    }, 0);

    this.totalPrice = goodPrice;
  },
  getTotalPrice() {
    return this.totalPrice;
  },
  add(name, price, quantity = 1) {
    const good = {
      name: name,
      price: price,
      quantity: quantity,
    };

    this.items.push(good);
    this.increaseCount(quantity);
    this.calculateItemPrice();
  },
  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const itemsStr = JSON.stringify(this.items);

    console.log(itemsStr);
    console.log(this.getTotalPrice());
  },
};

cart.add('молоко', 100 , 40);
cart.add('кефир', 50, 30);
cart.add('масло', 150, 20);
cart.add('йогурт', 75, 10);
cart.print();









