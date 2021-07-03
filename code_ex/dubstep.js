// Dubstep
// Вам дана строка, соответствующая звукам из дабстепа. 
// Необходимо очистить строку от "WUB" и вернуть слова из песни.

// Пример:
//  songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

const testString = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB';
const substr = 'WUB';

const removeEmptyStrings = (arr) => {
    return arr.reduce(function(accumulator, currentValue, index, array) {
        if(currentValue.length !== 0) {
            accumulator = [...accumulator, currentValue];
        }
        return accumulator;
      }, []);
};

const songDecoder = (str, substr) => {
    var arrayOfStrings = str.split(substr);
    
    return removeEmptyStrings(arrayOfStrings).join(' ');

};

console.log(songDecoder(testString, substr));
