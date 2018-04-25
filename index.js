
function logDriverNames(array){
  array.forEach(function(driver, i, array) {
    console.log(driver.name)
  })
}

function logDriversByHometown(array, location) {
   for (const driver of array) {
    if (driver.hometown == location) {
    console.log(driver.name)
    }
  }
}

function driversByRevenue(array){
  copyOfDrivers = array.slice()
  let sorted = copyOfDrivers.sort(function(a, b){
    return a.revenue - b.revenue
  })
  return sorted }


function driversByName(array) {
  copyOfDrivers = array.slice()
  let sorted = copyOfDrivers.sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
  return sorted
}

const totalRevenue = function(array) {
  let copyOfDrivers = array.slice();
  let reduced = copyOfDrivers.reduce(function (agg, driver, i, copyOfDrivers){
    return agg + driver.revenue
  }, 0)
return reduced
}

function averageRevenue(array){
  let numberOfDrivers = Object.keys(array).length
  return totalRevenue(array)/numberOfDrivers
}
//averageRevenue() — Receives an array of driver objects and returns the average revenue earned
// by each driver.
