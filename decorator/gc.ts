function gc(isTest: boolean) {
    return function(target: any) {
        target.isTestable = isTest;
    }
}

@gc(true)
class classG {
    constructor() {}
}
