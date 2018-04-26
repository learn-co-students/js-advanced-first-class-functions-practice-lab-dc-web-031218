// Code your solution in this file!

let logDriverNames = function(arr){
	arr.forEach(el => console.log(el.name));
};

let logDriversByHometown = function(arr, hometown){
	arr.filter(d=>d.hometown === hometown).
	forEach(d=>console.log(d.name));
};

let sortBy = function(attribute){
	return sortByX = function(d1, d2){
		return d1[attribute] - d2[attribute];
	};
};

let driversByRevenue = function(arr){
	let temp = [...arr];
	return temp.sort(sortBy('revenue'));
};


let driversByName = function(arr){
	let temp = [...arr];
	return temp.sort(function(d1, d2){
		return d1['name'].localeCompare(d2['name']);
	});
}

let totalRevenue = function(arr){
	return arr.reduce((a, b)=>
		{return a + b['revenue']
		}, 0);
}

let averageRevenue = function(arr){
	return totalRevenue(arr)/arr.length;
}