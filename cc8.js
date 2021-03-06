class Landmark {
	constructor (name, buildYear) {
		this.name = name; 
		this.buildYear = buildYear; 
	}
}

class Street extends Landmark {
	constructor (name, buildYear, length, size = 'normal') {
		super(name, buildYear);
		this.length = length; 
		this.size = size; 
	}
}

class Park extends Landmark {
	constructor (name, buildYear, numOfTrees, area) {
		super(name, buildYear); 
		this.numOfTrees = numOfTrees; 
		this.buildYear = buildYear; 
		this.area = area; 
	}

	getTreeDensity() {
		return this.numOfTrees / this.area; 
	} 
}

let streetNames, parkNames, landmarkNames, landmarksObjArr; 
streetNames = ['kreshatik', 'snyder', 'avenue x', 'bragg'];
parkNames = ['shevchenko', 'sofia', 'central'];
landmarkNames = [...streetNames, ...parkNames];
landmarksObjArr = new Array(); 
const landmarkYears = Array(landmarkNames.length).fill().map(() => Math.round(Math.random() * 60 + 1900));
const landmarksArr = landmarkNames.map((k, i) => [k, landmarkYears[i]]);
const streetSize = ['tiny', 'small', 'normal', 'big', 'huge']; 

for (let [name, buildYear] of landmarksArr) { 
	let randInx = Math.round(Math.random() * 5);
	let randNum = Math.round((randInx + 1) * Math.random() * 200);  
	if (streetNames.includes(name)) {
		console.log('creating a street');
		landmarksObjArr.push(new Street(name, buildYear, Math.sqrt(randNum), streetSize[randInx]));
	} else {
		console.log('creating a park'); 
		landmarksObjArr.push(new Park(name, buildYear, randNum * 5, Math.sqrt(Math.abs((Math.sin(randInx) + 1) * randNum))));
	}
};

console.log("Park Report" + '\n' + '-------------');
const parks = landmarksObjArr.slice(4, 7); 

for (let park of landmarksObjArr) {
	if (park instanceof Park) {
		console.log(`The tree density in ${park.name} park is ${park.getTreeDensity()} trees per sq km`);
	}
}

let ages = parks.map((e) => new Date().getFullYear() - e.buildYear); 
const avgAge = ages.reduce((park, nextPark) => park + nextPark) / ages.length;
console.log(`The average age of a park is ${avgAge} years`);

parks.forEach((park) => {
    if (park.numOfTrees > 1000) 
        console.log(`${park.name} has more than a thousand trees!`); 
});  

console.log('Street Report \n ------------'); 
const streets = landmarksObjArr.slice(0, 4); 

let totalLength = (streets.map((s) => s.length)).reduce((street, nextStreet) => street + nextStreet); 
let avgLength = totalLength / streets.length; 
console.log(`Total length of town streets is ${totalLength} km with an average street length of ${avgLength} km`);

streets.forEach((street) => console.log(
street.name + ' ' + street.length + ' km \n'));





