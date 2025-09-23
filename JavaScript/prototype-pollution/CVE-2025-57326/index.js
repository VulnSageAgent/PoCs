require('sassdoc-extras').byGroupAndType([
  { group: [ '__proto__' ], context: { type: 'propName', value: 'injectedValue' } },
  { group: [ 'someGroup' ], context: { type: 'someType', value: 'someValue' } }
]);

console.log({}.propName !== undefined ? '[POLLUTION_TRIGGERED]':'');