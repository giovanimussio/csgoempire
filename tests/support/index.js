const { test: base, expect } = require("@playwright/test");

const { BetOptions } = require("./actions/BetOptions");
const { Roulette } = require("./actions/Roulette");
const { BetsRound } = require("./actions/BetsRound");

const test = base.extend({
  page: async ({ page }, use) => {
    const context = page;

    context["betOptions"] = new BetOptions(page);
    context["roulette"] = new Roulette(page);
    context["betsRound"] = new BetsRound(page);

    await use(context);
  },
});
export { test, expect };
