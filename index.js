// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
   const blocks = distanceFromHqInBlocks(block);
   return blocks * 264; //one block = 264 feet
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }
}