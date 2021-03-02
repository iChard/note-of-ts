// function logFunc(params: string) {
//     return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
//         console.log(params);
//         console.log(descriptor);
//         const method = descriptor.value

//         descriptor.value = function (...args: any[]) {
//             let start = new Date().valueOf();
//             args = args.map(arg => String(arg));

//             try {
//                 return method.apply(this, args)
//             } finally {
//                 let end = new Date().valueOf();
//                 console.log(`start: ${start} end: ${end} consume: ${end - start}`);
//             }
//         }
//         return descriptor;
//     }
// }

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(descriptor);
        descriptor.enumerable = value;
        return descriptor;
    };
}

class FHelloClass {
    constructor() {
        console.log('构造函数');
    }

    @enumerable(true)
    sayHello(name: string) {
        console.log(name + ' sayHello');
    }
}

let phello = new FHelloClass()
phello.sayHello('zzb')