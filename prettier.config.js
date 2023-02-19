const base = require('@sourcegraph/prettierrc')
module.exports = { ...base, plugins: [...(base.plugins || []), 'prettier-plugin-tailwindcss'] }
