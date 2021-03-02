var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function helloWord(target) {
    console.log('hello word', target.name);
}
function helloFoo(target) {
    console.log('hello foo', target.name);
}
function helloParam(isTest) {
    return function (target) {
        target.isTestable = isTest;
    };
}
function exHello(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.sayHello = function () {
            console.log('hello');
        };
        return class_1;
    }(target));
}
var HelloWordClass = /** @class */ (function () {
    function HelloWordClass() {
        this.name = 'zzb';
        console.log('构造函数');
    }
    HelloWordClass = __decorate([
        helloFoo,
        helloWord,
        exHello,
        helloParam(true)
    ], HelloWordClass);
    return HelloWordClass;
}());
var hec = new HelloWordClass();
console.log(hec.isTestable);
console.log(hec.name);
