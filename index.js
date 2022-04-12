

const HQ = 42;
const FEET = 264;

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - HQ); 
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * FEET;
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * FEET;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start,destination);
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return ((distanceInFeet - 400) * 2) / 100;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return calculatesFarePrice = 25;
    } else {
        return 'cannot travel that far';
    }
  }

