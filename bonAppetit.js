function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let actualBill = bill.reduce((a, b) => a + b, 0) / 2;
  return actualBill - b === 0 ? 'Bon Appetit' : b - actualBill;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
