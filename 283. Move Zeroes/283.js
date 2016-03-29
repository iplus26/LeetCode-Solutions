var moveZeroes = function(nums) { 
	for(var i = nums.length - 1; i >= 0; i--){ 
		if(nums[i] === 0) { 
			nums.splice(i, 1); 
			nums.push(0); 
		} 
	}
}

var arr = [0,1,0,3,12]
moveZeroes(arr);
console.log(arr);