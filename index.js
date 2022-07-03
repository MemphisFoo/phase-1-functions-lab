const hq = 42;
const block = 264;

function distanceFromHqInBlocks(location) {
  if(location > hq) { 
    return location - hq;}
    else{return hq - location;}
};

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * block;
}

function distanceTravelledInFeet(start, destination) {
  if(destination > start) { 
    return (destination - start) * block;}
    else{return (start - destination) * block};
}

function calculatesFarePrice(start, destination) {
  const result = distanceTravelledInFeet(start, destination);
  if (result <= 400) {
    return 0}
  else if (result <= 2000) {
    return (result - 400) * .02}
  else if (result < 2500) {return 25}
else{ return "cannot travel that far"} 
}