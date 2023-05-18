function greet(name) {
    console.log(`Hello ${name}!`);
}
function sum(...params) {
    return params.reduce((a, b) => a + b, 0);
}
function foo() {
    return 'bar is one'
}
function fab() {
    return "Wow this is fab !"
}
exports.default = greet;
exports.sum = sum;
exports.foo = foo;
exports.fab = fab;