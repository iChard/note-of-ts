function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
let str = 'str'
// str=1;
// jQuery('a')

function foo(name: string): void {
    // return name;// error
}
var a: undefined;
var a1: number;
a1 = a;
interface IFace {
    name: string;
    age?: number;
    [propName: string]: any;
    readonly id?: string;
}
let nu: null = null;
let vo: number;
vo = nu
var face: IFace = {
    name: 'hello interface',
    age: 12,
    id: '1'
}
// face.id = '2'// error

interface INumberArray {
    [index: number]: number
}
var iarr: INumberArray = [
    1, 2, 3, 4, 5, 6
]
var fanArray: Array<number> = [1, 2, 3, 4, 5]
var norArray: number[] = [1, 2, 3]

function foo1() {
    // let args: number[] = arguments;
    let args1: {
        [index: number]: number;
        length: number;
        callee: Function
    } = arguments;
    let args2: IArguments = arguments;
}
var eles: NodeList = document.querySelectorAll('div')
let arr1 = [1, 2, 3]
// arr1[0] = 'name'

// function
let sum1 = function (a: number, b: number): number {
    return a + b;
}
// sum1(1,'2')
let sum2: (x: number, y: number) => number = (a: number, b: number): number => {
    return a + b;
}
sum2(1, 2)
interface Sum {
    (x: number, y: number): number;
}
let sum3: Sum = function (a, b) {
    return a + b;
}
function sumAll(x: number, ...rest: number[]): number {
    return x + rest.reduce((a: number, i: number): number => a + i, 0)
}
let sumBatch = sumAll(1, 2, 3, 4, 5, 6, 7)
console.log(sumBatch)

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): string | number {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}