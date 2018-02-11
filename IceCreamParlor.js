function iceCreamParlor(money, flavorsCount, flavorsArr){
	let ResultArr = [];
	let f1 = 0;
	let f2 = 0;
	let i = 0;

	while(i < flavorsArr.length){
		for (j = 1; j < flavorsArr.length; j++){
			if (flavorsArr[j] < money && j !== i){
				if (flavorsArr[i] + flavorsArr[j] === money){
					f1 = i +1;
					f2 = j + 1;
					i = flavorsArr.length
					break;
				}
			}
		}
		i++
	}
	if (f1 < f2){
		console.log(f1, f2)
	} else {
		console.log(f2, f1)
	}
}


var arr = [3,5,4,1,7] // 9


function createHash(array){
	let table = new Object;
	for (i = 0; i < array.length; i++){
		table[array[i]] = i
	}
	return table
}

function findTarget(arr, target){
	var table = createHash(arr)
		for (i = 0; i < arr.length; i++){
			let comp = target - arr[i];
			if (table[comp]){
				return [i, table[comp]]
			}
		}
		return "none found"
}

findTarget(arr, 9)
