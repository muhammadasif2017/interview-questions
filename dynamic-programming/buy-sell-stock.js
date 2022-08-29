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

/*
const maxProfit = function(prices) {
  if (!prices|| prices.length == 0) return 0;
  let min = Number.MAX_SAFE_INTEGER,
  let profit = 0;
  for(let p of prices){
      min = Math.min(p , min);
      profit = Math.max(p - min, profit);
  }
  return profit;
};


*/