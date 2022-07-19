//task1
let name1 = `ana`;
let name2 = `levani` ;

let age1 = 28;
let age2 = 21 ;

let ageDifference = age1 - age2;

let Text = `${name1} ${name2}-ze ${ageDifference} wlit ufrosia `; 

console.log(Text) ;

//task2
let list = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den' ] ;
let listLength =  list.length ;

if (listLength%2 == 0){
    console.log(  list [ (listLength - (listLength/2))-1 ] )  ;
    console.log(  list [ listLength - (listLength/2)] ) ;
} else {
console.log(list [ (listLength-1)/2 ]);
}

//task3
//part1
let subjects = ['marketing' , 'english' , 'stat 2', 'HR', 'probability']; 

let roommate = {
    fullName : `roommate's fullName` , 
    age :  20
}; 

let Student = {
  firstName: 'giorgi' ,
  lastName: 'gengashvili' ,
  age : 19 ,
  subjects : subjects , 
  roommate : roommate
};  

console.log(Student) ; 
//part2
let fullName= Student.firstName + ' ' + Student.lastName ;
Student.fullName =fullName; 
console.log(Student) ; 
let i=0;
for ( i ; i< subjects.length ; i++)
{
   console.log( Student.subjects[i] ); 

}

let result = `${Student.fullName} aris ${Student.age} wlis da misi roommate aris: ${Student.roommate.fullName}` ;
console.log(result); 

//task4
let fruits = ["Banana", "Orange", "Apple", "Mango",2,12] ; 
let  j = 0; 

while ( typeof (fruits[j]) == 'string'){
    console.log(fruits[j]); 
    j++ ;
}

//task5
let Array = [12,23,43,11,9,2,121,90] ; 
let Length =Array.length ; 
let s = 0;

for (s ; s < Length ; s++){
   if (Array[s]%2 == 0 && Array[s] > 31 ) {console.log(`Element is greater than provided value and is EVEN -> ${Array[s]}`)} ;
   if (Array[s]%2 != 0 && Array[s] < 31 ) {console.log(`Element is less than provided value and is ODD-> ${Array[s]}`)} ;
}