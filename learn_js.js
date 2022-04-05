// let admin
// let name
// name="John";
// admin=name;
// alert(admin)
//
// let age=prompt("how old'r u?", 70);
// alert(`U're ${age}!`)

// let a = 10; b=3
//
// function someFunction() {
//     let b = 5
//     return a + b
// }
// console.log(someFunction())
// let c=typeof 10
// console.log(c)

//
// function myFunction(a,b){
//    let sum=a*b ;
//    return (typeof sum)
//    }
//
// console.log(myFunction(2,3))

// function isEven(a) {
//     if (typeof a === "number") {
//         return a % 2 === 0;
//     }
//     return undefined;
// }
//
// console.log(isEven("10"))
//
// function calcSquare(a) {
//     const p = 4 * a;
//     return p;
// }
//
// console.log(calcSquare(4))
//
// // begin2
// function calcS(a) {
//     return s = a ** 2;
// }
//
// console.log(calcS(2))
//
// function calcPow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result
// }
//
// console.log(calcPow(4, 2))
//
// // begin3  s=a*b; p=2(a+b)
//
// function calcS_P(a, b) {
//     let s = a * b, p = 2 * (a + b);
//         console.log(s, p)
//     }
//
//
//
//
// // begin 4
//
// function begin4 (d) {
//     const p=3.14;
//    return  L=p*d;
//     }
// console.log(begin4(5));
//
// //begin 5
// function b4(num){
//     let v=num;
//     return num**3;
// }
// console.log(b4(5));

// //6
// function b6(a, b, c) {
//     let v = a * b * c;
//     let s = 2 * (a * b + b * c + a * c);
//     let result = [v,s]
//     return result;
// }
// console.log(b6(2, 3, 4))
//7

// function getInt(val) {
//     return val.toString().split(".")[0];
// }
//
// function b7(r) {
//
//     const p = 3.14;
//     return [parseInt((2 * p * r).toString(), 10), getInt((p * (r ** 2)))];
// }
//
// console.log(b7(5))
//
// //
//
// function b7a(r) {
//     const p = 3.14;
//     return [parseInt((l = 2 * p * r)).toString(), parseInt((s = p * (r ** 2)).toString())]; //issue with integer
// }
//
// console.log(b7a(5))
//
//
// //8
// function b8(a, b) {
//     let result = (a + b) / 2;
//     return result
// }
//
// console.log(b8(2, 4))
//
// //9
// function b9(a, b) { //не отрицательные знаечния
//     if (Math.sign(a) && Math.sign(b)) {
//         sqr = (a * b)
//     }
//     let result = Math.sqrt(sqr);
//     return Math.round(result)
// }
//
// console.log(b9(5, 4)) //issue if not integer
//
// //10
// function b10(a, b) { //не 0 значения
//     let bigger;
//     let smaller;
//     let result
//     if (a && b) {
//         bigger = (Math.max(a, b)) ** 2;
//         smaller = (Math.min(a, b)) ** 2;
//     }
//     let sum = bigger + smaller;
//     let res = bigger - smaller;
//     let mult = bigger * smaller;
//     let div = bigger / smaller;
//     return [sum, res, mult, div]
// }
//
// let result = b10(4, -6)
// console.log(result[0])
//
// //11
// function b11(a, b) {
//     let bigger;
//     let smaller;
//     if (a && b) {
//         bigger = Math.abs(Math.max(a, b));
//         smaller = Math.abs(Math.min(a, b));
//     }
//     let sum = bigger + smaller;
//     let res = bigger - smaller;
//     let mult = bigger * smaller;
//     let div = bigger / smaller;
//     return [sum, res, mult, div]
// }
//
// console.log(b11(-1, 3))
//
// //12
// function b12(a, b) {
//     let num = (a ** 2) + (b ** 2)
//     let c = Math.sqrt(num)
//     let p = a + b + c;
//     return [Math.ceil(c), Math.ceil(p)];
// }
//
// console.log(b12(2, 3))
//
// //13
//
// function countCircle(r1, r2) {
//     const p = 3.14
//     if (r1 > r2) {
//         let s1 = p * (r1 ** 2);
//         let s2 = p * (r2 ** 2);
//         let s3 = s1 - s2;
//         return [s1, s2, s3]
//     }
//
// }
//
// console.log(countCircle(10, 5))
//
// //14
//
// function b14(l) {
//     const p = 3.14;
//     let R = l / (2 * p);
//     let S = p * (R ** 2);
//     return [R.toFixed(2), S.toFixed(2)]
// }
//
// console.log(b14(11.26))
//
// //15
//
// function b15(S) {
//     const p = 3.14;
//     let D = Math.sqrt(S / p) * 2;
//     let L = p * D;
//     return [D.toFixed(2), L.toFixed(2)]
// }
//
// console.log(b15(15.34))

//16

function b16(x1, x2) {
    let result
    if (x2 > x1) {
        result = Math.abs((x2 - x1))
    }
    return result.toFixed(2)
}

console.log(b16(-7.7, -6.3))

//17

function b17(a, b, c, isPlus = true) {
    let A = Math.abs(a);
    let B = Math.abs(b)
    let C = Math.abs(c)
    if (A < C < B) {
        let AC = C - A;
        let BC = B - C;
        let sum = isPlus ? AC + BC : AC * BC;
        return [AC.toFixed(2), BC.toFixed(2), sum.toFixed(2)];

    }
}

console.log(b17(-2.7, -8.6, -6))


//18
function b18(a, b, c) {
    return b17(a, b, c, false)
}

console.log(b18(-3.8, 5.1, -1.9))

//19
function b19(x1, y1, x2, y2) {
    let s = (Math.abs((x1 - x2) * (y1 - y2)))
    let p = 2 * (Math.abs(x1 - x2) + Math.abs(y1 - y2))
    return [s.toFixed(2), p.toFixed(2)]
}

console.log(b19(-7, 7.6, 2.2, -6.3))

//20

function b20(x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)).toFixed(2);
}

console.log(b20(-4.3, 8.1, 7.5, -1.8))

function b21(x1, y1, x2, y2, x3, y3) {
    let a = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
    let b = Math.sqrt(((x2 - x3) ** 2) + ((y2 - y3) ** 2));
    let c = Math.sqrt(((x3 - x1) ** 2) + ((y3 - y1) ** 2));
    let P = a + b + c;
    let p = (a + b + c) / 2;
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return [P.toFixed(2), S.toFixed(2)]
}

console.log(b21(0.1, 2.7, 8.1, 8.4, -5.1, 5.9))

function b22(a, b) {
    let temp = a;
    a = b;
    b = temp
    return [a, b]

}

console.log(b22(0.3, 9.52))

function b23(a, b, c) {
    let temp = b;
    let tempror = c
    b = a;
    c = temp;
    a = tempror
    return [a, b, c]
}

console.log(b23(6.35, 8.07, 8.96))

//24
function b24(a, b, c) {
    let temp = c;
    let tempror = a
    a = b;
    b = temp;
    c = tempror
    return [a, b, c]
}

console.log(b24(8.87, 7.96, 1.8))

//25
function b25(x) {
    // let y = 3*((x**2)*(x**2)*(x**2)) - 6* (x**2) -7;
    let y = 3 * ((x ** 3) * (x ** 3)) - 6 * (x ** 2) - 7;
    return y.toFixed(2);
}

console.log(b25(2.66))

//26
function b26(x) {
    let y = 4 * ((x - 3) ** 3 * (x - 3) ** 3) - 7 * (x - 3) ** 3 + 2;
    return y.toFixed(2);
}

console.log(b26(5.44))

//27

function b27(a) {
    let A = a ** 2;
    let A1 = A ** 2;
    let A2 = A1 ** 2;
    return [A.toFixed(2), A1.toFixed(2), A2.toFixed(2)]
}

console.log(b27(1.03))

//                                        DATE: 04.04.2022
//28
// function b28(a) {
//     // let n = 2;
//     // if (n < 4) {
//     //    n++
//     //     return Math.pow(a, n);
//     // }
//     let b=5;
//     if (b %5===0 && b<=15){
//         return Math.pow(a,b)
//     }
// }
// console.log(b28(3.43))

function b28_1(a){
    let b, c;
    b = a * a; //2

    c = b * a //3
    c = c * b;//5
    b = c * c; //10
    c = c * b; //15
    return c;

}
console.log(b28_1(3.43))

function b29(a){
    const p = 3.14
    if (a>=0 && a<360){
        result= (a*p)/180;
    }
    return result.toFixed(2)
}
console.log(b29(92.18))

//30
function b30(a){
    const p = 3.14
    if (a>=0 && a<2*p){
        result= (a*180)/p;
    }
    return result.toFixed(2)
}
console.log(b30 (4.99))

//31
function b31(tF){
    let tC = (tF-32)*(5/9);
    return tC.toFixed(2)

}
console.log(b31(29.93))

//32
function b32(tC){
    let tF = (tC-32)*(5/9);
    return tF.toFixed(2)

}
console.log(b32(54.86))

//33
function b33(x,y,price){
    let kg = price/x;
  let yPrice=y*kg;
    return [kg.toFixed(2), yPrice.toFixed(2)]
}
console.log(b33(3.000, 2.900, 195.3))

//34

function b34(x, priceX, y, priceY){
    let choclate = priceX/x;
    let iriska = priceY/y;
    let expens = choclate/iriska;
    return [choclate, iriska, expens]
}
console.log(b34(3.900, 292.50, 2.800, 105.00))

//35

function b35(lake, river,t1,t2){
    let s;
    if(lake>river){
        s= lake*t1+(lake -river) * t2
    }
    return s;
}
console.log(b35(8.00, 1.00, 3.00,1.00))

//36
function b36(V1, V2, S, T){
    let s = S+(V1*T+V2*T);
    return s;
}
console.log(b36(80.00, 80.00, 130.00, 3.00))

//37
function b37(V1, V2, S, T){
    let s = Math.abs(S-(V1*T+V2*T));
    return s;
}
console.log(b36(70.00, 80.00, 30.00, 1.00))

//38

function b38(a,b) {
    let x
    if (a != 0) {
        x = -b / a;
        return x;
    }
}
console.log(b38(5.00, 25.00))
//39

function b39(a,b,c){
    let D= b**2 - 4 *a *c;
    let x = (-b +- Math.sqrt(D))/(2*a)
    return [Math.min(x), Math.max(x)]
}
console.log(b39(4.00, -28, 48 )) // no max value

//40