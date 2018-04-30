// Code your solution in this file!
const logDriverNames = function(array){
	for (driver of array){
		console.log(driver.name);
	}
}

const logDriversByHometown = function(arrayOfDrivers, location){
	for (driver of arrayOfDrivers){
		if (driver.hometown === location){
			console.log(driver.name);
		}
	}
}

const driversByRevenue = function(arrayOfDrivers){
	newArray = [...arrayOfDrivers]
	return newArray = newArray.sort(function(a,b) {return a.revenue - b.revenue});
} 

const driversByName = function(arrayOfDrivers){
	let newArray = [...arrayOfDrivers]
	newArray = newArray.sort(function(a,b){
		return a.name > b.name;
	})
	return newArray;
}

const totalRevenue = function(arrayOfDrivers){
	let newArray = [...arrayOfDrivers];
	let sum = 0;
	for (driver of newArray){
		sum += driver.revenue;
	}
	return sum;
}

const averageRevenue = function(arrayOfDrivers){
	let newArray = [...arrayOfDrivers];
	let total = 0;
	for(driver of newArray) {
	    total += driver.revenue;
	}
	let avg = total / newArray.length;
	return avg;

}