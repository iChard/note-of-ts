var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function defaultValue(value) {
    console.log('before');
    return function (target, propertyName) {
        console.log('run');
        var desc = Object.getOwnPropertyDescriptor(target, propertyName);
        Object.defineProperty(target, propertyName, __assign(__assign({}, desc), { value: value }));
    };
}
var HelloClass = /** @class */ (function () {
    function HelloClass() {
        this.val = 'val';
        console.log('构造函数');
    }
    __decorate([
        defaultValue('zzb')
    ], HelloClass.prototype, "name", void 0);
    return HelloClass;
}());
var p = new HelloClass();
console.log(p);
