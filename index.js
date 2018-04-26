function logDriverNames(driverobjs) {
  driverobjs.forEach(function(driverobj) {
    console.log(driverobj.name);
  });
}

function logDriversByHometown(driverarr, location) {
  driverarr.forEach(function(driverobj) {
    if (driverobj.hometown === location) console.log(driverobj.name);
  });
}

function driversByRevenue(driverobjs) {
  const copy = [...driverobjs];
  copy.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return copy;
}

function driversByName(driverobjs) {
  // console.log(driverobjs)
  const copy = [...driverobjs];
  copy.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
    // return a.name - b.name
  });
  return copy;
}

function totalRevenue(driverobjs) {
  // let total = driverobjs.reduce(function(acc, value) {
  //   console.log(acc , value)
  //   return acc + value.revenue
  // }, 0);
  // return total
  return driverobjs.reduce((acc,value) => acc + value.revenue, 0)
}

function averageRevenue(driverobjs) {
  let total = driverobjs.reduce(function(acc, value){
    return acc + value.revenue
  }, 0);
  let average = (total/Object.keys(driverobjs).length)
  return average
}
