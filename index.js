#!/usr/bin/env node

const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);

readFile("./package.json")
  .then(manifest => {
    const { scripts } = JSON.parse(manifest);

    if (!scripts) {
      console.log("No scripts found in package.json");
      return;
    }

    const message = Object.keys(scripts)
      .map(key => `  ${key}: "${scripts[key]}"`)
      .join("\n");

    console.log("Found the following scripts:");
    console.log(message);
  })
  .catch(() => console.log("Could not find package.json"));
