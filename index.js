// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach((driver)=>{console.log(driver.name);});
}

function logDriversByHometown(drivers,location){
  drivers.filter((driver)=> {
    return driver.hometown===location;
  }).forEach((driver)=> {
    console.log(driver.name);
    });
}

function driversByRevenue(drivers){
  return [...drivers].sort((num1,num2)=>{
    return num1.revenue - num2.revenue;
  });
}

function driversByName(drivers){
  return [...drivers].sort((a,b)=>{
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce((agg, driver)=>{
    return agg + driver.revenue;},0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
