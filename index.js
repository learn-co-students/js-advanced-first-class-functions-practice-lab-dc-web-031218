// Code your solution in this file!
const logDriverNames = function (drivers) {
  for(driver of drivers) {
    console.log(driver.name);
  }
};

const logDriversByHometown = function (drivers, city) {
  for(driver of drivers) {
    if (driver.hometown === city) {
      console.log(driver.name);
    }
  }
};

const driversByRevenue = function (drivers) {
  let newArray = [...drivers];
  newArray.sort(function(a, b) {
    return (a.revenue > b.revenue);
  });
  return newArray;
};

const driversByName = function (drivers) {
  let newArray = [...drivers];
  newArray.sort(function(a, b) {
    return (a.name > b.name);
  });
  return newArray;
};

const totalRevenue = function (drivers) {
  let sum = 0;
  for(driver of drivers) {
    sum += driver.revenue;
  };
  return sum;
};

const averageRevenue = function (drivers) {
  return (totalRevenue(drivers)/drivers.length)
}
