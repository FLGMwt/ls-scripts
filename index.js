#!/usr/bin/env node

const { scripts } = require("./package.json");

if (!scripts) {
  console.log("no scripts found");
  return;
}

const message = Object.keys(scripts)
  .map(key => `  ${key}: "${scripts[key]}"`)
  .join("\n");

console.log("Found the following scripts:");
console.log(message);
