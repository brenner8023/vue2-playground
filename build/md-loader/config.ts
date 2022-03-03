const Config = require("markdown-it-chain");
const containers = require("./containers.ts");
const overWriteFenceRule = require("./fence.ts");

const config = new Config();

config.options.html(true).end().plugin("containers").use(containers).end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
