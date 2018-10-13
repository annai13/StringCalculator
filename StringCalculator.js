
function Add(numbers){

 if (toString.call(numbers) !== "[object Array]")
	return false;
		var sum =  0;
		function trim (str)
		{
			 return str.replace (/\n/g, ',');
		}
		for(var i=0;i<numbers.length;i++){

			if (0 > (numbers[i])){
				throw "Negatives not allowed: " +(numbers[i]);
				}

			sum += Number(numbers[i]);

		}

		return sum;
}


console.log(Add([]));
console.log(Add([1]));
console.log(Add([1,2]));
console.log(Add([1,'2\n',3,-4,-5]));




