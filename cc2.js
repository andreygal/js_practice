var johnAvg = (153 + 95 + 29) / 3;
var mikeAvg = (11 + 112 + 48) / 3;
var maryAvg = (161 + 15 + 38) / 3;

if (johnAvg === mikeAvg || maryAvg === johnAvg || mikeAvg === maryAvg) {
    if (johnAvg === mikeAvg && mikeAvg === maryAvg) {
        console.log('Draw!');
    } else if (johnAvg === mikeAvg) {
        if (johnAvg > maryAvg) {
            console.log('John and Mike draw for 1st place, Mary is 2nd');
        } else {
            console.log('Mary wins 1st place, Mike and John are 2nd'); 
        }
    } else if (johnAvg === maryAvg) {
        if (johnAvg > mikeAvg) {
            console.log('John and Mary win 1st place, Mike is 2nd');
        } else {
            console.log('Mike wins 1st place, John and Mary are 2nd'); 
        }
    } else if (mikeAvg === maryAvg) {
        if (mikeAvg > johnAvg) {
            console.log('Mike and Mary win 1st place, John is 2nd'); 
        } else {
            console.log('John wins 1st place, Mike and Mary are 2nd');
        }
    }
}  else {
     if (johnAvg > mikeAvg) {
       if (mikeAvg > maryAvg) {
           console.log('1st place John; 2nd place Mike, 3rd place Mary'); 
       } else if (maryAvg > johnAvg) {
           console.log('1st place Mary; 2nd place John, 3rd place Mike'); 
       } else {
           console.log('1st place John; 2nd place Mary; 3rd place Mike');
       }
    } else {
       if (maryAvg > johnAvg) {
           console.log('1st place Mike; 2nd place Mary, 3rd place John'); 
       } else if (maryAvg < mikeAvg) {
           console.log('1st place Mike; 2nd place John, 3rd place Mary'); 
       } else {
           console.log('1st place Mary; 2nd place Mike; 3rd place John');
       }
    }
}

console.log("John: " + johnAvg + " Mike: " + mikeAvg + " Mary: " + maryAvg); 