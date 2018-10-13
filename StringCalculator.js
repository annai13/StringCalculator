
function Add(numbers){

 if (toString.call(numbers) !== "[object Array]")
	return false;
	
		var sum =  0;
		
		
		function trim (str)
		{
			 return str.replace (/\n/g, ',');
		}
		function retnum(str) { 
			var num = str.replace( /\D+/g, ""); 
			return parseInt(num,10); 
		}
		
		for(var i=0;i<numbers.length;i++){

			if (0 > (numbers[i])){
				throw "Negatives not allowed: " +(numbers[i]);
			}

			if((numbers[i]) > 1000){
				continue;
			}

			sum += Number(numbers[i]);

		}

		return sum;
}


console.log(Add([]));
console.log(Add([1]));
console.log(Add([10000,2]));
console.log(Add(['//;\n1;2']));




