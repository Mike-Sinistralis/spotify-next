const path = require('path');

const getAliases = (basePath) => [
  // TODO When updating this, also update jsconfig.json
  ['~Pages', path.resolve(...basePath, 'pages')],
];

module.exports = getAliases;
