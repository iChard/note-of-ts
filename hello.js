function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
var str = 'str';
// str=1;
// jQuery('a')
function foo(name) {
    // return name;// error
}
var a;
var a1;
a1 = a;
var nu = null;
var vo;
vo = nu;
var face = {
    name: 'hello interface',
    age: 12,
    id: '1'
};
var iarr = [
    1, 2, 3, 4, 5, 6
];
var fanArray = [1, 2, 3, 4, 5];
var norArray = [1, 2, 3];
function foo1() {
    // let args: number[] = arguments;
    var args1 = arguments;
    var args2 = arguments;
}
// var eles = document.querySelectorAll('div');
var arr1 = [1, 2, 3];
// arr1[0] = 'name'
// function
var sum1 = function (a, b) {
    return a + b;
};
// sum1(1,'2')
var sum2 = function (a, b) {
    return a + b;
};
sum2(1, 2);
var sum3 = function (a, b) {
    return a + b;
};
function sumAll(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (a, i) { return a + i; }, 0);
}
var sumBatch = sumAll(1, 2, 3, 4, 5, 6, 7);
console.log(sumBatch);
