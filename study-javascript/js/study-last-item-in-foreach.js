/**
 *
 * @param <b>fn</b> function to apply to inner elements <br/>
 * @param <b>first_fn</b> function to apply to the first element <br/>
 * @param <b>last_fn</b> function to apply to the last element <br/>
 */
Array.prototype.for_each = function (fn, first_fn = fn, last_fn = fn) {
    let lastElementIndex = this.length - 1;
    this.forEach((element, index, array) => {
        if (index > 0 && index < lastElementIndex)
            fn(element);
        else if (index == 0)
            first_fn(element);
        else
            last_fn(element);
    });
    return this;
}

let numbers = [4, 8, 15, 16, 23, 42];
numbers.for_each(x => console.log(`Inner element: ${x}`), x => console.log(`First element: ${x}`), x => console.log(`Last element: ${x}`))
numbers.for_each(x => console.log(`Inner element: ${x}`))
    .sort((x, y) => y - x)
    .for_each(x => console.log(`Inner element: ${x}`))