module.exports = (plop) => {
  plop.setGenerator("element", require("./plop-scripts/element"));

  plop.setGenerator("module", require("./plop-scripts/module"));

  plop.setGenerator("feature", require("./plop-scripts/feature"));

  plop.setGenerator("page", require("./plop-scripts/page"));

  plop.setGenerator("duck", require("./plop-scripts/duck"));
};
