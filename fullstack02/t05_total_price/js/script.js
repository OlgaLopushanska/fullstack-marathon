// let sum = total(1, 0.1);
// sum= total(1, 0.2, sum);
// sum= total(1, 0.78, sum);
// sum = Number.parseFloat(sum).toFixed(2);
// console.log(sum);
// //will return 1.08

function total(addCount = 0, addPrice = 0, currentTotal = 0){
    if(!isNaN(parseInt(currentTotal, 10))) {
        if(!isNaN(parseInt(addCount, 10)) && !isNaN(parseInt(addPrice, 10))) {
            currentTotal += addCount * addPrice;
        }
    } else currentTotal = 0;
    return currentTotal;
}
