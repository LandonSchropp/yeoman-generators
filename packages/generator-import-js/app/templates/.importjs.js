module.exports = {
  aliases: {
    // TODO: Remove node_modules when this issue is resolved: 
    // https://github.com/Galooshi/import-js/issues/560
    _: "node_modules/lodash",
  },
  danglingCommas: false,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/'/g, '"');
  },
  maxLineLength: 100
};
