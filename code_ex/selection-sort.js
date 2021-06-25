function selectionSort(array) {

    for(let i = 0; i < array.length; i++) {
      let min = Math.min.apply(null, array.slice(i));
		  let minIndex = array.slice(i).findIndex((elem) => elem === min);
		  if(array[i] !== min) {
		  	let temp = array[i];
		  	array[i] = min;
		  	array[minIndex + i] = temp;
		  }
    }

    return array;
  }
  
  
  console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));