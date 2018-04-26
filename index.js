// Code your solution in this file!
const logDriverNames = function (list) {
  list.forEach(function (driver) { console.log(driver.name)});
}

const logDriversByHometown = function (list, hometown) {
  let a = list.filter(function (driver) { return driver.hometown === hometown });
  logDriverNames(a);
}

const driversByRevenue = function (list, revenue) {
  const revenueSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };

  let a = [...list];
  return a.sort(revenueSorter);
}

const driversByName = function (list) {
  const namesComparator = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  };

  let a = [...list];
  return a.sort(namesComparator);
}

const totalRevenue = function (list) {
  const reduceRevenue = function (total, currentDriver) {
    return total + currentDriver.revenue;
  };

  a = [...list];
  return a.reduce(reduceRevenue, 0);
}

const averageRevenue = function (list) {
  a = totalRevenue(list);
  return a / list.length;
}
