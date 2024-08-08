var finalPrices = function(prices) {
    let finalPrices = [...prices];
    let stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            let j = stack.pop();
            finalPrices[j] = prices[j] - prices[i];
        }
        stack.push(i);
    } 
    return finalPrices;
};

console.log(finalPrices([8, 4, 6, 2, 3])); 
console.log(finalPrices([10, 1, 1, 6]));   
console.log(finalPrices([1, 2, 3, 4, 5])); 
console.log(finalPrices([5, 4, 3, 2, 1])); 
console.log(finalPrices([3, 3, 3, 3, 3])); 
