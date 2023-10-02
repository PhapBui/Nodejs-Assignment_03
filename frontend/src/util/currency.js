export function currency(price) {
  if (!price && price !== 0) return;
  return (+price).toLocaleString("vi-VI") + " VND";
}
/**{(+productData.price).toLocaleString("vi-VI")}  */

export function currencyWithDiscount(price, discount) {
  if (!price && price !== 0) return;
  return ((price * (100 - discount)) / 100).toLocaleString("vi-VI") + " VND";
}

export function TotalCart(cartList) {
  const total = cartList.reduce((a, b) => {
    a += b.currentPrice * b.quantity;
    return a;
  }, 0);
  return currency(+total);
}
