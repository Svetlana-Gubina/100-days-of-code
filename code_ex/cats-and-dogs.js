// Кошачьи и собачьи года
// У меня есть кошка и собака. Они родились humanYears тому назад. 
// Напишите функцию, которая сконвертирует humanYears в catYears 
// и dogYears.

// Правила конвертации:
// Cat Years:
// 15 cat years в первый год
// +9 cat years во второй год
// +4 cat years в каждый последующий год

// Dog Years
// 15 dog years в первый год
// +9 dog years во второй год
// +5 dog years в каждый последующий год

const convertToCatYears = (humanYears) => {
    const firstYear = 15;
    const secondYear = 9;
    const eachNextYear = 4;

    if(humanYears <= 1) {
        return firstYear;
    }
    if(humanYears > 1 && humanYears <= 2) {
        return firstYear + secondYear;
    }
    let rest = humanYears - 2;
    return firstYear + secondYear + rest * eachNextYear;
};
