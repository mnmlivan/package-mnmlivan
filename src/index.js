const updateNotifier = require("update-notifier");
const pkg = require("../package.json");

updateNotifier({ pkg }).notify();

module.exports = function () {
  console.log(`           Hi, I’m Ivan.
      Web: https://mnmlivan.xyz/
 Mastodon: https://indieweb.social/@mnmlivan
   GitHub: https://github.com/mnmlivan
` );
};
