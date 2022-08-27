function maxProfit(prices){
  let bought = prices[0]
  let profit = 0
  for (const curr of prices) {
      console.log('current', curr);
      bought = Math.min(curr, bought)
      profit = Math.max(curr - bought, profit)
      console.log('Bought', bought);
      console.log('profit', profit);
  }
  return profit
};