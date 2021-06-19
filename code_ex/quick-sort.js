function quickSort(array) {
	if(array.length <= 1 ) {
		return array;
	}

	let pivot = array[0];
	let less = [];
	let bigger = [];
	
	for(let i = 1; i < array.length; i++) {
		if(array[i] <= pivot) {
			less.push(array[i]);
		} else {
			bigger.push(array[i]);
		}
	}

	return quickSort(less).concat(pivot).concat(quickSort(bigger));
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
