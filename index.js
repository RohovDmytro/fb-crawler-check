var userAgents = require("./user-agents.json");
module.exports = function(ua){
  return userAgents.indexOf(ua) !== -1;
}
