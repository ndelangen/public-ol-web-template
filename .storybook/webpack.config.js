"use strict";

const configFactory = require("../config/webpack.config");
const custom = configFactory("storybook");

// delete custom.entry;

module.exports = async ({config, mode}) => {
  const result =  {...config, module: {...config.module, rules: custom.module.rules}};
  console.dir(result, {depth: 20});
  return result;
};