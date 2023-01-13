const path = require('path');

const getAliases = (basePath) => [
  // TODO When updating this, also update jsconfig.json
  ['~Pages', path.resolve(...basePath, 'pages')],
  ['~Components', path.resolve(...basePath, 'components')],
];

module.exports = getAliases;
