#!/usr/bin/env node

require = require("esm")(module);
require("svelte/register");

const path = require("path");
const sander = require("sander");

const App = require("./src/App.svelte").default;
const { UW } = require("./src/utils/uw.js");

const PROJECT_SLUG = path.basename(process.cwd());
const GIT_BRANCH = process.env.GIT_BRANCH || "dev";
const CDN_ROOT =
  "https://www.gannett-cdn.com/usat-storytelling/testing";
const PROJECT_PATH = `${CDN_ROOT}/${GIT_BRANCH}/${PROJECT_SLUG}`;

const CANONICAL_URL = "https://local.usatoday.com/publish-addon-test/";

module.exports = { render };

// render static html for embedding
async function render() {
  const seed = Date.now();
  const content = await sander
    .readFile(__dirname, "src/content/data.json")
    .then(JSON.parse);

  const { html } = App.render(content);

  const styles = [`${PROJECT_PATH}/bundle.css?c=${seed}`];
  const scripts = [`${PROJECT_PATH}/bundle.js?c=${seed}`];

  return UW({
    title: content.title,
    description: content.deck,
    url: CANONICAL_URL,
    scripts,
    styles,
    html: `<main id="publish-addon-test">${html}</main>`,
  });
}

if (require.main === module) {
  render()
    .catch(console.error)
    .then(uw => JSON.stringify(uw, null, 2))
    .then(console.log);
}
