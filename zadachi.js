// https://html-plus.in.ua/javascript-simple-tasks/#variables-dialog #1
// let a = 34;
// a += 2;
// console.log(a);
//
// let b = 10;
//
// b -= 5; // = 15
// console.log(b);
//
// let c = "New"
// c += " строка!"; //= "Новая строка"
// console.log(c);
//
// //2


// let salary=prompt("Enter Your income here, please");
// let tallage = 115;
// let bonus=`${salary}`/100 * tallage;
// let text ="Bonus is 15%. Now your income is "
// alert(text + bonus);
//
// let taxTall=10;
// let tax=bonus/100*taxTall;
// let netInc= bonus-tax;
//     let text1="Taxes -10%. Ur net Income is "
// alert(text1 + netInc)
//
// let cost=netInc-190;
//     alert("Costs: -190. Total: " + cost);
//     let tallage1=50;
//     let beBest=cost-cost/100*tallage1;
//     alert("My wife confiscated 50%. Now I hve only " + beBest.toFixed(1))
//
// //#3
//
// pirogi = 17;
// console.log("Cat ate a pirog, there left " + --pirogi + " pirogov") //16
// console.log("DED & vnu4ka  ate 2 and there left " + (--pirogi - 1) + " pirogov") //14
// console.log("Marina took 3 and there left " + (--pirogi - 3) + " pirogov") //11
// console.log("Deti took 2 and there left " + (--pirogi - 3) + " pirogov") //9
// console.log("Doyarka took 1 and there left " + --pirogi + " pirogov")//8
// console.log("Friends took 5 and there left " + (--pirogi - 4) + " pirogov") //3
// console.log("Marina returned 1 and there left " + pirogi++ + " pirogov")// 4

//#4

// alert("Zagaday chislo")
// alert(" Umnoj  na 2!")
// alert("+7!")
// number= prompt("Enter the result")
// let result = (number - 7)/2
// alert("It's" +" " + result)

// 5
//
// let names= [ ];
// for (let i = 0; i <3; i++) {
//     const enteredName= prompt("Enter your name")
//     if (enteredName &&  typeof enteredName === "string"){
//         names.push(enteredName)
//     }
//    else{
//        alert("Please enter letters")
//     }
//  }
//
// const arr=[`ira`, `lena`, `olga`]
// console.log(arr[1])
// // document.getElementById("name")
//
// const result = arr[0] + `<br>` + `oleg`+`<br>` +`\t1.olya` +`<br>`+`\t2.olga`
// document.write(result)
// // let ol = document.createElement('ol');
// // document.body.append(ol);
// // let li = document.createElement('li');
// // li.textContent = names;
// // ol.append(li);


// for (let i=2; i<10; i++){
//     if (i%2===0) {
//         alert(i)
//     } else continue
// }

// let i=0;
// while (i<3){
//     alert(`number ${i}`);
//     i++
//     }

//
// let num;
// do {
//     num = prompt("Enter number greater than 100", 0);
// } while (num <= 100 && num);


// for (let i=0; i<10; i++){
//     if (i%2 !== 0) {
//         alert(i)
//     }
// }
//
// if (browser === "Edge") {
//     alert("You've got the Edge!");
// } else if (browser === "Chrome" ||
//     browser === "Firefox" ||
//     browser === "Safari" ||
//     browser === "Opera") {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!')
// }
//
//
// switch (number = +prompt('Введите число между 0 и 3', '')) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3: alert('Вы ввели число 2, а может и 3');
//     break;
// }
//
//
// function checkAge(age) {
//     return (age => 18) ? true :confirm('Родители разрешили?');
//     }
//

//
// function min(a,b){
//     if (a<b){
//         return a;
//     } else {
//         return b
//     }
// }
// console.log(min(2,5))
// console.log(min(3,-1))
// console.log(min(1,1))


function pow(x,n){
    return x**n
}
console.log(pow(3,2))
console.log(pow(3,3))
console.log(pow(1,100))