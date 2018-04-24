// Code your solution in this file!
const driver = {};
function logDriverNames(driver) {
  driver.forEach(function(element) {
    console.log(element.name);
  });
}
function logDriversByHometown(driver, home) {
  driver.forEach(function(element) {
    if (element.hometown === home) {
    console.log(element.name);
  }
  });
}

function driversByRevenue(driver) {
  const newDrivers = [...driver];
  const driversByRevenue = newDrivers.sort(function(elementA, elementB) {
    return elementA.revenue - elementB.revenue;
  });
  return driversByRevenue;
}

function driversByName(driver) {
  const newDrivers = [...driver];
  const driversByRevenue = newDrivers.sort(function(a,b) {
    return (a.name).localeCompare(b.name);
  });
  return driversByRevenue;
}

function totalRevenue(driver) {
  const newDrivers = [...driver];
  const driversTotalRevenue = newDrivers.reduce(
    function(agg, el, i, arr) {
      return agg + el.revenue;
    }, 0
  );
  return driversTotalRevenue;
}

function averageRevenue(driver) {
  const newDrivers = [...driver];
  const driversTotalRevenue = newDrivers.reduce(
    function(agg, el, i, arr) {
      return agg + el.revenue;
    }, 0
  );
  return driversTotalRevenue / newDrivers.length;
}
