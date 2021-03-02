function helloWord(target: any): void {
    console.log('hello word', target.name);
}

function helloFoo(target: any): void {
    console.log('hello foo', target.name);
}

function helloParam(isTest: boolean) {
    return function (target: any) {
        target.isTestable = isTest;
    }
}

function exHello<T extends { new(...args: any[]) }>(target: T) {
    return class extends target {
        sayHello() {
            console.log('hello');
        }
    }
}

@helloFoo
@helloWord
@exHello
@helloParam(true)
class HelloWordClass {
    isTestable: boolean;
    constructor() {
        console.log('构造函数');
    }
    name: string = 'zzb';
}
const hec = new HelloWordClass();
console.log(hec.isTestable);
console.log(hec.name);