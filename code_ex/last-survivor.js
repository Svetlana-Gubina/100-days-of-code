// Последний выживший
// Вам дана строка и массив чисел. Числа обозначают позиции 
// букв в строке, которые должны быть удалены. После удаления 
// уменьшается length массива. Верните букву, которая останется 
// в массиве после удаления.

// Пример:
let str = "zbk", arr = [0, 1];
// str = "bk", arr = [1]
// str = "b", arr = []
//  return 'b'

const returnLastCharacter = (str, arr) => {
    let test = str.split('');
    console.log(test);

    for(let i of arr) {
        test.splice(i, 1);
    }

    return test.join('');
};    

console.log(returnLastCharacter(str, arr));