const words = ['apple', 'orange', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana', 'avocado' ];

const removeDuplicates = (array) => {
    let result = [];
    array.forEach((it) => {
        if(result.indexOf(it) === -1) {
            result.push(it);
        }
    });

    return result;
};

console.log(removeDuplicates(words));