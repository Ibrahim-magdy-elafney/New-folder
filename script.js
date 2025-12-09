// closure example
function sum(){
    let y = 40
    let i = 10
    function q(){
        let u = 20
        i++
        console.log(i,u);
    }
    return q
}
let firstq = sum()
console. dir(firstq)
firstq()
firstq()
firstq()
let secondq = sum()
secondq()
secondq()
secondq()
// array example
let o = [10,20,30,40,50]
console.log(o);
console.log(o[2]);
console.log(o[4]);
0[1] = 100
console.log(o[1]);
o.push(60)
console. log(o[5])
o.pop()
console.log(o[4]);
function e(m , s){
    return m * s
    return m / s
}
console. log(e(8 , 4))
let r = (a , b) => a * b
console. log(r(10 , 5))
function t(v , c){
    console.log(v - c);
    console.log(v + c);
}
t(20 , 10)
function z(){
    let a = "samer"
    let b = a+"ali" 
    console. log(b)
}
z()
z()
z()
function f(text){
    let p = "mohamed" + text
    console.log(p);
}
let m = "abdo"
f(m)