const CronJob = require("cron").CronJob;
require("dotenv").config();
const APIClient = require("ig-trading-api").APIClient;

async function init() {
  const client = new APIClient(APIClient.URL_DEMO, {
    apiKey: process.env.APIKEY,
    username: process.env.IGUSERNAME,
    password: process.env.IGPASSWORD,
  });
  console.log(await client.rest.account.getAccounts());
  process.exit();
}

init();
//process.exit();
