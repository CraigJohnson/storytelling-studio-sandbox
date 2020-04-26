const assert = require("assert");
const path = require("path");

const Gootenberg = require("gootenberg");
const sander = require("sander");
const ssr = require("./ssr.js");

// the directory we're in is our project slug, always
// if you need a different project URL, use UW config
const PROJECT_SLUG = path.basename(process.cwd());

const SPREADSHEET_KEY = "1ObKsthZXGZpdrrNns7rf8_6OqvAv9tDbr_0J5zIjrao";

const REQUIRED_ENVS = ["GAPI_CLIENT_EMAIL", "GAPI_PRIVATE_KEY"];

const OUTPUT_DIR = "./src/content";
const STATIC_DIR = "./src/static";

const GIT_BRANCH = process.env.GIT_BRANCH || "dev";
const CDN_ROOT =
  "https://www.gannett-cdn.com/usat-storytelling/testing";
const PROJECT_PATH = `${CDN_ROOT}/${GIT_BRANCH}/${PROJECT_SLUG}`;

module.exports = {
  default: check,
  auth,
  data,
  embed,
  uw,
};

async function check() {
  console.log("Checking configuration.");

  REQUIRED_ENVS.forEach((key) => {
    assert(
      key in process.env,
      `${key} not found. Please check your .env and try again.`
    );
  });

  console.log("Good to gulp.");
}

async function auth() {
  const goot = new Gootenberg();
  await goot.auth.jwt();

  return goot;
}

async function data() {
  await check();

  // fetch data here
  const goot = await auth();

  const table = await goot.parse.table(SPREADSHEET_KEY);
  const top = kv(table.top);
  top.dateModified = new Date().toJSON();

  return Promise.all([
    sander.writeFile(STATIC_DIR, "films.json", JSON.stringify(table.films, null, 2)),
    sander.writeFile(
      OUTPUT_DIR,
      "data.json",
      JSON.stringify(top, null, 2),
    ),
  ]);
}

/*
Generate an embed.html file that can be used as within an In Depth story.
*/
async function embed() {
  const seed = Date.now();
  const css = `${PROJECT_PATH}/bundle.css?c=${seed}`;
  const js = `${PROJECT_PATH}/bundle.js?c=${seed}`;

  const html = `
<div id="${PROJECT_SLUG}"></div>
<link href="${css}" rel="stylesheet" />
<script defer src="${js}"></script>
`;

  return sander.writeFile("./public", "embed.html", html);
}

async function uw() {
  const uw = await ssr.render();
  return sander.writeFile(
    "./public/uw",
    `${PROJECT_SLUG}.json`,
    JSON.stringify(uw, null, 2)
  );
}

// Takes a sheet from Goot and returns an object of k/v pairs
// Requires columns of "key" and "value"
function kv(obj) {
  return obj.reduce((m, row) => {
    // This, by default, will only pick up the "key" and "value" columns.
    // Anything else, like a "notes" column, will be ignored.
    m[row.key] = row.value;
    return m;
  }, {});
}
