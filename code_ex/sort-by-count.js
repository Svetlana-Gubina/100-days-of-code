const words = ['apple', 'orange', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana', 'avocado' ];

// output => ['banana', 'banana', 'banana', 'banana', 'grapefruit', 'grapefruit', // 'orange', 'orange', 'apple' ] O(n)
// Отсортировать по количеству вхождений в массив строк, если количсетво одинаковое тогда // по алфавиту


const customSortArray = (array) => {
    let result = [];

    let items = {};
    for(let i of array) {
        if(!items[i]) {
            items[i] = 0;
        }
        items[i]++;
    }
    // console.log(items);

    function sort() {
        let max = Math.max.apply(null, Object.values(items));
        // console.log(max);
        for(let j of array) {
            if(items[j] && items[j] === max) {
                result = [...result, ...new Array(items[j]).fill(j)];
                array = array.filter((it) => it !== j);
                delete items[j];
                sort();
            }
        }

        return result;
    }
    
    return sort();

};

console.log(customSortArray(words));