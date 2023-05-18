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
function name(params) {
    console.log(params)
}

exports.default = greet;
exports.sum = sum;
exports.foo = foo;
exports.fab = fab;
exports.name = name;