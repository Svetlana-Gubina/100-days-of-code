const words = ['apple', 'orange', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana', 'avocado' ];

// output => ['banana', 'banana', 'banana', 'banana', 'grapefruit', 'grapefruit', // 'orange', 'orange', 'apple' ] O(n)
// Отсортировать по количеству вхождений в массив строк, если количсетво одинаковое тогда // по алфавиту

const customSort = (words) => {
    let finalResult = [];

    const countMap = words.reduce(function(accumulator,currentvalue){
        accumulator[currentvalue] = (accumulator[currentvalue]||0)+1; 
        return accumulator;
    }, {});
    
    while(Object.keys(countMap).length) {
        let max = Math.max.apply(null, Object.values(countMap));
        const result = Object.keys(countMap).filter(it => countMap[it] === max);
        if(result.length < 2) {
            finalResult = [...finalResult, ...new Array(max).fill(result[0])];
        } else {
            result.sort((a, b) => a.localeCompare(b));
            for(let i of result) {
                finalResult = [...finalResult, ...new Array(max).fill(i)];
            }
        }
        
        result.forEach((item) => {
            delete countMap[item];
        });
    }
    
    return finalResult;
};

console.log(customSort(words));