//functions
function  d(){
    console.log("mohamed");
    let t = 10
    console. log(t)
}
d()
function e(number){
    console. log(number / 4)
    console. log(number * 8)
}
e(9)
let sum = (a,b) => {
    return a * b
    console. log(a + b)
    return a / b
}
console. log(sum(5,9))
function o(s,d){
    return s - d
}
console. log(o(2,6))
//closure
function y(){
    let r = 70
    let p = 40
    function m(){
        let w = 90
        r++
        p--
        console. log(w , r , p)
    }
    return m
}
let firstm = y()
console. dir(firstm)
firstm()
let theartm = y()
console. dir(theartm)
theartm()
theartm()
theartm()
// scope
function q(string){
    let l = "i have a" +" "+ string
    console. log(l)
}
let u = "bus"
q(u)
// arrays
let n = [90, 40,80,20,10,10]
console. log(n)
console. log(n[3])
console. log(n[5])
console. log(n[4] * n[3])
n[4] = 30
console. log(n[4])
console. log(n[4] + n[3])
n.push(70)
console. log(n[6])
n.pop()
console. log(n[5])
// coursion 
let k = "22.4"
let g = "77"
console. log(parseFloat(k) + parseInt(g))
let v = true
let f = 1
console. log(parseInt(v)+f)
console. log(v===f)
console. log(v>=1)
