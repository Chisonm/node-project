// Global object

// console.log(global)

// the setTimeout function is a part of the global object
setTimeout(() => {
    console.log("in the timeout")
    clearInterval(interval)
}, 3000)

// the setInterval function is a part of the global object
const interval = setInterval(() => {
    console.log("in the interval")
}, 1000)

console.log(__dirname)
console.log(__filename)