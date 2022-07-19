//Task 1
let sampleObject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
} ;

function  LogFunction (object){
    if (object.isItarable ==  1) {
        for (i=0 ; i< object.sampleArray.length ;  i++)
        console.log(object.sampleArray[i]) ;
    } else {
        console.log("provided array isn't itarable")
    };
}

LogFunction(sampleObject) ; 

//Task 2
function checkPythagoras(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      console.log("the equasion is false");
    } else if (a ** 2 + b ** 2 == c ** 2) {
      console.log("they are equal");
    } else {
      console.log("the equasion is false");
    }
  }

checkPythagoras(7, 3, 10);


//Task 3
let myArray = [2, 14, 25, 75, 11, 6];

let sortedArray = myArray.sort((a, b) => a - b);

function minMax() {
  console.log( `Min value is ${sortedArray[0]} and Max value is ${sortedArray[sortedArray.length - 1]}`);
}

minMax(sortedArray)


//Task 4
function angleDegree(a) {
    if (a == 0) {
      console.log("Angle is zero");
    } else if ((a > 0 && a < 90) || (a < 0 && a > -90)) {
      console.log("Acute angle: An angle between 0 and 90 degrees");
    } else if (a == 90 || a == -90) {
      console.log("Right angle: An 90 degree angle.");
    } else if ((a > 90 && a < 180) || (a < -90 && a > -180)) {
      console.log("Obtuse angle: An angle between 90 and 180 degrees.");
    } else if (a == 180 || a == -180) {
      console.log("Straight angle: A 180 degree angle.");
    } else if (a < -180) {
      console.log("Too large of an angle");
    } else {
      console.log("Too large of an angle");
    }
  }
  angleDegree(80);