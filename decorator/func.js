// function logFunc(params: string) {
//     return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
//         console.log(params);
//         console.log(descriptor);
//         const method = descriptor.value
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(descriptor);
        descriptor.enumerable = value;
        return descriptor;
    };
}
var FHelloClass = /** @class */ (function () {
    function FHelloClass() {
        console.log('构造函数');
    }
    FHelloClass.prototype.sayHello = function (name) {
        console.log(name + ' sayHello');
    };
    __decorate([
        enumerable(true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], FHelloClass.prototype, "sayHello");
    return FHelloClass;
}());
var phello = new FHelloClass();
phello.sayHello('zzb');
