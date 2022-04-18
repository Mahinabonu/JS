//  let user = {};
// user.name="John";
// user.surname="Smith";
// user.name="Pete";
// delete user.name;
//
// function isEmpty(obj){
//    for(let prop in obj){
//        return false
//    }
//    return true
// }

//  let salaries = {
//      John: 100,
//      Ann: 160,
//      Pete: 130
//  }
//  // let sum
//  // sum = salaries.John+salaries.Ann+salaries.Pete
//
// let sum =0;
// for (let key in salaries){
//     sum+=salaries[key]
// }
// alert(sum)
//


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumb(obj) {
    for (let key in obj) {
        if (obj[key] === typeof Number) {
            obj[key] *= 2;
        }
    }
}