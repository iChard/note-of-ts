function defaultValue(value: string) {
    console.log('before');
    return function(target: any, propertyName: string) {
        console.log('run');
        let desc = Object.getOwnPropertyDescriptor(target, propertyName);
        Object.defineProperty(target, propertyName, {
            ...desc,
            value
        })
    }
}

class HelloClass {
    constructor() {
        console.log('构造函数');
    }

    @defaultValue('zzb')
    name: string | undefined;
    val: string = 'val'
}
let p = new HelloClass();
console.log(p);
