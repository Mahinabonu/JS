// // source: https://webkyrs.info/page/zadachi-po-rabote-s-obektami-v-javascript
// // 1.
// let user = {
//     name: "John",
//     age: 30,
//     // isEmpty(obj){
//     //     alert(this.age)
//     // }
// };
// console.log(`age` in user)
// console.log(user.age)
//
// function isEmpty(obj) {
//     for (let arg in obj) {
//         console.log(this.age)
//     }
// }
//
// // console.log(user.key?.age)
//
// // 2
//
// let userNew = [
//     {
//         name: "John",
//         age: 30
//     },
//     {
//         name: "Bob",
//         age: 21
//     },
//     {
//         name: "Anna",
//         age: 19
//     }
// ]
//
// let user1 = userNew[1]
// console.log(user1)
//
// //3
// userNew.pop
//
// //4 incorr
//
// function sortArr() {
//     for (let age in userNew) {
//         console.log(age)
//     }
// }
//
// sortArr()
//
// //5
// const obj = {
//     id: 5,
//     token: 12343423
// };
//
// const id = obj["id"]
// console.log(id)
//
//
// //6
// const object = {
//     id: 5,
//     token: 12343423
// };
//
// let userId = object.id
//
//
// // https://htmllab.ru/zadachi-po-javascript-object/
//
// const city = {};
// city[`name`] = `Dushanbe`;
// city.pop = 10e6;
//
// const city2 = {
//     name: `NY`,
//     pop: 1e6,
//     exportStr() {
//         console.log(Object.entries(city2))
//     }
//
//
// }
//
// // incorr
// function getName(obj) {
//     for (let arg in obj) {
//         return this.name;
//     }
// }
//
// getName(city2)
//
// //4
// function exportStr(obj) {
//     console.log(Object.entries(obj))
// }
//
// exportStr(city)
//
// //5
//
// function getObj(obj) {
//     return this;
// }
//
// getCity = getObj() //?
//
//
// //6 ??/
//
// //7
//
// let d1 = [45, 78, 10, 3]
// d1[7] = 100;
// console.log(d1[6], d1[7])
//
//
// //8
// let d2 = [45, 78, 10, 3]
// let sum = 0;
// for (let key in d2) {
//     sum += d2[key];
//
// }
// console.log(sum)
//
// //9
// let d3 = [45, 78, 10, 3]
// d3[7] = 100;
// let sum3 = 0;
// for (let key in d3) {
//     sum3 += d3[key];
//
// }
// console.log(sum3)

//10

let d4 = [45, 78, 10, 3]
d4.sort(function (a, b) {
    return b - a
})
console.log(d4)

//https://the-evening-code.com/posts/ten-javascript-exercises-with-objects
//1???
function isPlainObj(obj){
    if(typeof obj === Object && obj != null){
        return true
    }
}
let dat={a: 1}
console.log(isPlainObj(dat))



