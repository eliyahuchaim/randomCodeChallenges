function anagramCount(str1, str2){
	let str1Length = str1.length;
	let str1Counter = 0;
	let i = 0;

	while (i <= str1.length){
		let current = str1[i]
		for (j = 0; j < str2.length; j++){
			if (str2[j] === current){
				str1Counter +=1;
				str1 = str1.substring(i + 1);
				str2 = str2.substring(0, j) + str2.substring(j + 1)
				i = -1;
				break;
			}
		}
		i++
	}
	console.log(str1Length - str1Counter + str2.length)
}
