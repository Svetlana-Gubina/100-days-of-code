const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};


function mergeSort(array) {
	if(array.length < 2) {
		return array;
	}

	let splitIndex = Math.floor(array.length / 2);
	let left = array.slice(0, splitIndex);
	let right = array.slice(splitIndex);

	return merge(mergeSort(left), mergeSort(right));
}

  
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));