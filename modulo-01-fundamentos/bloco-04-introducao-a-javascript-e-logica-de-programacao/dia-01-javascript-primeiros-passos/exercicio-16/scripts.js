const costOfProduct = 10;
const saleValue = 20;
const tax = 1.2;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * tax;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log("Total Profit:", totalProfit);
} else {
  console.log("Error: The values cannot be negatives.");
};