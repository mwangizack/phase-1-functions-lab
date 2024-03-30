// Code your solution in this file!

let eachBlock = 264;

function distanceFromHqInBlocks(pickUpLocation) {
  const hqLocation = 42;
  return Math.abs(pickUpLocation - hqLocation);
}

function distanceFromHqInFeet(pickUpLocation) {
  let blocksFromHq = distanceFromHqInBlocks(pickUpLocation);

  return blocksFromHq * eachBlock;;
}

function distanceTravelledInFeet(start, destination) {
  let distanceInBlocks = Math.abs(destination - start);
  return distanceInBlocks * eachBlock;;
}

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  let farePriceInDollars;
  
  if (distanceInFeet <= 400){
    farePriceInDollars = 0;
  }
  else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    let pricePerFoot = 0.02;
    farePriceInDollars = (distanceInFeet - 400) * pricePerFoot;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    farePriceInDollars = 25;
  }else{
    return 'cannot travel that far'
  }

  return farePriceInDollars;
}
