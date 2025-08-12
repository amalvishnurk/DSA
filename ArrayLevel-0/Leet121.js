let prices = [7,6,4,3,1]


var maxProfit = function (prices) {
  let min = prices[0];
  let maxPro = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxPro) maxPro = prices[i] - min;
    if (prices[i] < min) min = prices[i];
  }
  return maxPro
};
console.log(maxProfit(prices));
