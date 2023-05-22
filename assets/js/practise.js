// Dəyişənlərin adlandırılması:
// 1.PascalCase
// UserName
// SurName
// 2.camelCase
// userName
// surName
// 3.snake_Case
// user-surname

// var a=22
// alert(a);
// a =33;
// alert(a);

// Operatorlar:
// 1.Archımetic operators
// +
// -
// *
// /
// %
// **
// ++
// 2.Assigment operators:
// =
// +=
// -=
// *=
// /=
// %=
// **=
// 3.Comperetion operators:
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=
// ?: -ternary operator (if()else)
// 4.Logical operators:
// &&
// ||
// !
// 5.Typeof operators:
// typeof
// intanceof
// 6.Bitwise operators:
// & -and
// | -or
// ~ -not
// ^ -xor
// << -
// >> -
// <<< -
// >>> -

// var c=prompt();
// if(c>9 && c<100){
// var b=c%10
//  var a=(c-b)/10
// }
// console.log(a,b);

// var c=prompt();
// if(c >=0 || c<0){
//     for(let i=0;i<c.length;i++){
//         console.log(c.length); 
//     }
// }   

// Data type:
// 1.Primitive type
// string - ""; ''; ``;
// number x = 3; y = 3.6
// bigInt  
// var bigInteger =234567890123456789012345678901234567890; sonsuz dövr rəqəmləri
// boolean 
// var x=3
// var y=2
// var z=3
// (x==y) \return false
// (x==z) \return true
// undifined
// null
// symbol
// var symbol = Symbol('Symbol')
// typof prinmitive type:
// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof 234567890123456789012345678901234567890n // Returns bigint
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" (kind of a bug in JavaScript)
// typeof Symbol('symbol') // Returns Symbol

// Primitive data types can store only a single value.

// 2.Non-primitive type: \ To store multiple and complex values, non-primitive data types are used.

// object \ Used to store collection of data.
// array
// date


// Conditions:

// if(5 > 4){
//     alert("duzdu")
// }
// else{
//     alert('sehvdir')
// }

// var a=5;

// if(a > 0){
//     alert('musbet')
// }else if( a == 0){
//   alert('0-a beraber')
// }
// else{
//     alert('menfi')
// }
 
// var a=5;
// if(a > 0){
//     alert('musbet')
// }
// if(a < 20){
//     alert('20den kicik ')
// }
// if(a < 0){
//     alert('menfi')
// }
// alert('proqarm yoxlandi')

// Task 1

// var a = prompt();

// if(a % 2 == 0 ){
//     if( a < 100){
//      var b= a%10
//      var c= (a-b)/10
//      var z= b+c
//      console.log(z);  
//     }
  
// }
// else{
//     console.log('duz deyil')
// }
// Task 2

// var a=0;
// var sum=1;
// for(let i=0; i <= 100;i++){
//     if(i % 2 ==0){
//          a+=i;
//     }
// }
// console.log(a);

// Task 3

// var a=1;
// var multiply=1;

// for(let i=0; i<=10; i++){
//    if( i % 2==1){
//       a*=i
      
//   }
// }
// console.log(a);

// Task 4
// 1)
// var sum=0;
// var  count=0

// for(let i=0; i<=100; i++){
//    if(i % 15==0){
//     sum+=i;      // 15 bölunenlerin cemi
//     count++;      //15 bölunenlerin sayı
//    }
// }
// var avg=sum/count;
// console.log(avg);

// 2)

// var a=prompt();
// var i=0;
// var sum=0;
// var count=0;
// while(i<=a){
//    if(i % 15==0){
//     sum+=i;
//     count++
//    }
//    i++

// }
// var avg=sum/count
// console.log(avg);

// 3)

// var i=0
// var sum=0
// var count=0
// do{
//    if(i %15==0){
//     sum+=i;
//     count++
//    }
//   i++
// }while(i<=100)

// var avg=sum/count
// alert(avg)


// Task 5

// 1)
// var i=1;
// var num=prompt('eded daxil edin')

// if(!isNaN(num)){
//    while(i<num){
//       alert('salam')
//    }
// }
// else{
//    alert('duzgun eded daxil edin')
// }

// 2)
// var i=1;
// var num=prompt();
// do{
// if(!isNaN(num)){
//    alert('salam')
// }
// else{
//    alert('duzgun eded daxil edin')
// }
// }while(i<num)

// Task 6

// do{
//    var num=prompt('eded daxil edin')
// }while(isNaN(num))

// Task 7

// var num1=Number(prompt('birinci ededi daxil edin '));
// var num2=Number(prompt('ikinci ededi daxil edin'));
// var sum=0;

// for(var i=num1+1; i<num2;i++){
//    sum+=i
// }
// alert(sum);

// Task 8

// var num1=Number(prompt('birinci ededi daxil edin'));
// var num2=Number(prompt('ikinci ededi daxil edin'));

// var sym=prompt('simvol daxil edin')
// switch (sym){
//    case '+':
//      alert(num1+num2)
//     break
//    case '-':
//    alert(num1-num2)
//     break
//    case '/':
//    alert(num1/num2)
//    break
//    case'*':
//    alert(num1*num2)
//    break
// }

// Task 9

// var num=Number(prompt('iki reqemli eded daxil edin'));

// if(num>0){
//  var b= num%10
//  var c=(num-b)/10
//   var z=b*c
// }
// console.log(z);

// Array
// var a=[1,"Amil",true,"masin"]
// console.log(a);

// var nums=[1,12,24,3,5]
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i]%2 ==0){
//         console.log(nums[i]);
//     }
//     else if(nums[i]%2==1){
//         console.log(nums[i]);
//     }
    
// }

// var sdt1={
//     name:"Coşqun",
//     surname:"Şirinli",
//     age: 19

// }
// var studentsBoys=[
//     sdt1,
//     {
//         name:"Amil",
//         surname:"Eyvazov",
//         age: 19
//     },
//     {
//        name:"Səbri",
//        surname:"Qurbanov",
//        age: 20
//     }
// ]
// console.log(studentsBoys);

// Functions
// function helloAmil(){
//     console.log("Salam Dünya");
// }
// helloAmil()

// function math(x,y){
//     console.log(Number(x)+Number(y));
// }
// math(5,4)



// function power(x,y){
//     result=1
//     for (let i = 0; i < y; i++) {
//      result=result*x;
        
//     }
//     console.log(result);;
// }
// power(prompt("eded daxil edin"),prompt("quvveti daxil edin"));

// var salam = ()=>{
//     alert('SALAM')
//     console.log('hello');
// }
// salam()


// var clac=(x,y)=>x/y     // Arrov function
// var calc= function (params) {
//     return x/y                        /// Anonim function
// }

// Task 1

// function findNumber(str,char){
//     for (let i = 0; i < str.length; i++) {
//        if(str[i]==char){
//         console.log(1);
//        }
//       if(char==false){
//         console.log(-1);
//       } 
        
//     }
    
// }
// findNumber("salam","l")

// Task 2
// var num=Number(prompt());
// var check=false;
// for (let i = 2; i < num; i++) {
//     if(num%i==0){
//         check=true;
//     }
    
// }
// if(check===true){
//     console.log("m9urekkeb");
// }
// else{
//     console.log("sade");
// }

// var num=Number(prompt())
// var count=0

// for (let i = 0; i < num; i++) {
//     if(num%2==0){
//         count++
//     }
    
// }
// if(count>0){
// console.log("murekkeb");
// }
// else{
//     console.log("sade");
// }

// Let ve var ferqleri
//  var function scopdur
// let blok skopdur
// Hoisting mentiqi

// eded=25
// console.log(eded);
// var eded;

// Erorlar
// declaretion  taninmad;r
// initializer  ilkin qiymetdir
// assigment sonradan menimsedilen qiymet

// Consdroction function

// let shargird= {
//     name:"Amil",
//     surname:"Eyvazov",
//     age:19
// }
// function Student(name,surname, age){
//     this.name=name,
//     this.surname=surname,
//     this.age=age
// };
// let telebe = new Student("Aytac","Qedirli",18)
// console.log(telebe);
// console.log(shargird);