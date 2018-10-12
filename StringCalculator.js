function Add(numbers){

 if (toString.call(numbers) !== "[object Array]")
	return false;
		var sum =  0;
		for(var i=0;i<numbers.length;i++){
			sum += Number(numbers[i]);

		}

		return sum;
}
console.log(Add([]));
console.log(Add([1]));
console.log(Add([1,2]));
console.log(Add([1,2,3,4,5]));
