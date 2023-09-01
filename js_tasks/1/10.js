function totalPrice(groceries) {
    let total = 0;
  
    for (const item of groceries) {
      total += item.quantity * item.price;
    }
  
    return total;
  }
  console.log(totalPrice([
    { product: "Milk", quantity: 1, price: 10 },
    { product: "Eggs", quantity: 12, price: 5 },
    { product: "Bread", quantity: 2, price: 20 },
    { product: "Cheese", quantity: 1, price: 30 }
    ]));