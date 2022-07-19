// task1

function getUsefulElement(arr1) {
    const elObj = arr1.reduce((map,val) => {
        map[val] = (map[val] || 0 ) + 1;
        return map;
    
    },{})
    const maxObj = Object.entries(elObj).reduce((max, entry) =>
    entry[1] >= max [1] ? entry : max
    );
    return maxObj[0] + ' - ' + maxObj[1]
}

arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(getUsefulElement(arr1))



// task2

function getOdd(par){

    let y = par.toString();
    let result = '';
    for(i=0; i<y.length; i++){
        if(y[i] % 2 == 0 ){
      
            result = result + y[i] + '-'  
            
        }
        else{
            result = result.slice(0, -1);
            result = result +  y[i] 
            
        }
    }
    var lastChar = result.substr(result.length - 1); 
    
    if(lastChar  === '-'){
        
        result = result.slice(0, -1);
        console.log(result );
        return result
       
    }else{
        console.log(result);
        return result
        
    }
    
}

let x = 225468;
getOdd(x)


// task 3


let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
var myFinalArray = array1.concat(array2.filter((item) => array1.indexOf(item) < 0));   

console.log(myFinalArray);



// task4


function readyToPutInTheDOM(arr){
    let lastResult = arr.map((el)=>{return '<h1> ' +  el.name + ' </h1>' +  ' <h2> ' + el.age  + ' </h2>'});
    return lastResult
  }
console.log(readyToPutInTheDOM([
{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
])); 



// task5

function sumOfDifferences(arr){
    var arrSorted = arr.sort((a,b)=> a-b).reverse();
    let result = [];
 
    for ( let i = 0; i < arrSorted.length; i++) {
        if(arr[i+ 1]) {
            result.push(arr[i] - arr[i+1]); 

        }
    } 
    const sum = result.reduce((accumulator, value) => {
        return accumulator + value;
      });
    
      return sum
}
let arr = [2, 1, 10];
console.log(sumOfDifferences(arr));