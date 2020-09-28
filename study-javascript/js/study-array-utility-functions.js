numbers = [42, 8, 16, 23, 15, 4];
console.log(numbers)

// partial order function
const numeric_order_asc = function (x, y) {
    if (x < y) return -1;
    if (x == y) return 0;
    return +1;
}
const lambda_numeric_order_asc = (u,v) => u-v
const lambda_numeric_order_desc = (u,v) => v-u
numbers.sort(lambda_numeric_order_asc)
console.log(numbers)
numbers.sort(lambda_numeric_order_desc)
console.log(numbers)

employees = [

]