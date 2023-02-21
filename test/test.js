const test = require("ava");
const mnmlivan = require("../")

test("Status", t => {
  t.true(true, "Everything is fine.");
});

test("Output", t => {
  mnmlivan();
  t.true(true);
});
