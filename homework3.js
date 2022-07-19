//task 1
function  gcd(a,b) {
    let numa = new Array ;
    let numb = new Array ; 
    let numc = new Array ;
for (let i =0; i<= a ; i ++) {
     if (a%i==0) { numa.push(i)}
    };
  
for ( let i =0; i<= b ; i ++) {
     if (b%i==0) { numb.push(i)}
    };
  
    console.log(numa) ;
    console.log(numb) ;
   
  for (let i =0 ; i < numa.length ; i ++ ){  
    for (let b = 0 ; b < numb.length ;  b ++ ) { 
          if (numa[i]==numb[b])
          {
               numc.push(numa[i]) ; 
          }
        }
    };
  console.log('numc is : ' + numc); 
  console.log( `gcd is  : ` +  Math.max(...numc)); 
  } ;
  
  gcd(7,18); 
  
  
  //Task 2 
  
  function sumOfDigits(n) {
   let numlngth = n.toString().length ;
   let minus=0 ; 
   let sum = new Array;
   let result =0; 
   for (i =0 ; i< numlngth ; i++) 
   {
    let sb = 10**(i+1) ;
    let res = (n%sb)/(sb/10) ;
    sum.push(Math.floor(res))
    minus= n-res ;  
  }
  
  for (i =0 ; i< sum.length ; i++) {
    result+=sum[i];
  }
  return result ; 
  }
  
let s = sumOfDigits (12350915); 
console.log(s) ;
  
let funcCount = 0;
let sum  =0;
  
function recFunc (n) {
  funcCount ++ ;
  let  k = funcCount  ;
  console.log(k);
  let minusdata ;
  let lnght = n.toString().length ;
  let countmin= Math.round(((n%10**k)/((10**k)/10)) );
  console.log(countmin);
  minusdata = n-countmin ;
  sum += countmin;
   
  if (k>=lnght) {return sum  } ; 
  
    return recFunc(minusdata) ;  
  };
  
  let ggb = recFunc(12345);
  
  console.log(ggb)


  //Task 3
  
  let factory = {
      facName : 'Volkswagen Wolfsburg Plant',
      calculateWorkload : function () 
      {   
          let MyArray = new Array ;
          for (i= 0; i< this.employeeWeeklyWorkload.length ; i++ )
            { 
                MyArray.push(this.employeeWeeklyWorkload[i].workload);
            }
            return MyArray; 
      },
      formatArray : function (myname) {
        let myObj = new Object ; 
       for (i = 0 ; i < this.employees.length ; i ++)
       {
         if (this.employees[i].name == myname)
      {
        myObj.name =myname ;
        myObj.timeLeft = 5 - ( this.employees[i].timeSpent) ;
      }
       }
         return  myObj ;
      }   
  }
  
  let factoryEmployees = {
      employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
  }
  
  let workloadData = {
      employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", workload : 25 },{name : "Maria", workload : 28 },{name : "Dan", workload : 30 },{name : "Lorelai", workload : 31 }]
  }
  
  
let res = factory.calculateWorkload.bind(workloadData);
console.log(res());   
  
let res2 = factory.formatArray.bind(factoryEmployees , "Sam");
console.log(res2());  
  
  //Task 4

  function sumOfmyNumbers (...arry){
    let  result = 0 ;
    for (let i=0 ; i< arry.length; i ++) {
      result +=  arry[i] ; 
    } 
    return result ; 
  }
   
  let result =  sumOfmyNumbers(null,...[1,2,3,4,5,6,7,8,9]) 
  console.log(result) ; 
  
  //Task 5

  function checkIfEven(n){
     if (n == 0 )  return 'Even' ;
     if (n == 1 )  return 'Odd' ; 
     return  checkIfEven(n-2) ; 
  }

let r = checkIfEven(4);

console.log(r) ; 