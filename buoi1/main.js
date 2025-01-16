// var string = "                 Hoang Chi Trung       " ;
// var num = 10;

// var a = Math.random(); b = Math.random();
// if (a>b)
//     alert(a+' greater than ' +b);
// else alert(a+' less than '+b);


// var Array = ["C#","JavaScript","Java","NodeJS","C","C++","Java"]
// console.log(Array)

// var Object = {name:"Chi Trung", age:20, school:"FPT University"}
// var string = "Hoang Chi Trung Trung Trung";
// console.log(string.indexOf('Trung',string.indexOf('Trung')+1) );
// console.log(string.replace('Trung',"Hctrung"));
// console.log(string.toUpperCase());
// string = string.trim();
// console.log(string)

//28

// function showMessage(Message){
//     console.log("Message: Hello " + Message);
//     alert("Hello "+Message)
// }
// showMessage("Siuuuu");


//29
/*
1.Declaration Function 
    function showMessage()
    - có thể gọi trước khi định nghĩa
2. Expression Function
    var Message = function TestName(){}
    setTimeout(function(){}
    var MyObject = function(){}
    - éo gọi đc trước khi định nghĩa
*/


// PolyFill??


// tạo ra 1 function để có thể chạy dc trên các trình duyệt cũ
// if (!String.prototype.includes) {
//     String.prototype.includes = function (search, start) {
//         'use strict';
//         if (search instanceof RegExp) {
//             throw TypeError("first argument must not be RegExp");
//         }

//         if (start == undefined)
//             start = 0;
//         return this.indexOf(search, start) != 1;
//     }
// }

// console.log('Javascript Courses'.includes("Javascript",5))
// console.log('Javascript Courses')


//31. Object trong JavaScript

// var myInfor = {
//     name: "Hoang Chi Trung",
//     age: 20,
//     school: "FPT University",
//     getname: function () {
//         return myInfor.name
//     }
// }
// myInfor.email = "hctrung2k4@gmail.com"

// delete myInfor.age
// console.log(myInfor.getname())
//33. Object Prototype in javascript
// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getFullName = function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// User.prototype.className = "FSA";
// var user = new User('Trung', 'Chi', 'Avatar1!!');
// var user2 = new User('Phuc', 'Tien', 'Avatar2!!')

// console.log(user.className )
// console.log(user2)
//34
// var date = new Date();

// var day = date.getDate()
// var month = date.getMonth()
// var year = date.getFullYear()

// console.log('Current date:',day + '/' + (month + 1) + '/' + year)
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
//ctr+d để bôi đen đoạn codecode

//35. câu lệnh rẽ nhánh if else
//DỄ QUÁ éo học 

//36. câu lệnh rẽ nhánh switch case
// cũng dễ quá éo code
//37 toán tử 3 ngôi
// cũng dễ vloz, éo học
//38 vòng lặp
/*
1. for - vòng lặp với điều kiện đúng
2. for/in - vòng lặp qua key của đối phương
3. for/of lặp qua value của đối phương
4. while - vòng lặp cho đến khi điều kiện đúng
5. do/while - vòng lặp cho đến khi điều kiện đúng, rồi mới thực hiện đoạn code trong vòng lặp

*/

//for/of
// var myInfor = {
//     name: "Hoang Chi Trung",
//     age: 20,
//     school: "FPT University",
// }

// for (var value of Object.keys(myInfor))
//     console.log(value)

// for (var value of Object.values(myInfor))
//     console.log(value)

// chú ý object.values hoặc object.keys 