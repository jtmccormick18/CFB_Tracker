var cfb = require("cfb.js");
// import cfb, { ApiClient } from "cfb.js";
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "jVSoLzETmOSBOUy/hyUXq/JDIcrMhDoarPpXK/2JFyb5Tqr0Cx+xoH2a+zjZ+Yjs";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.TeamsApi();

var opts = {
  conference: "SEC", // String | Conference abbreviation filter
};

apiInstance.getTeams(opts).then(
  function(data) {
    console.log("API called successfully. Returned data: " + data);
  },
  function(error) {
    console.error(error);
  }
);

// const CFB_API = function (opts) {
//   var apiInstance = new cfb.TeamsApi();
//   apiInstance.getTeams(opts).then(
//     function (data) {
//       console.log("API called successfully. Returned data: " + data);
//     },
//     function (error) {
//       console.error(error);
//     }
//   );
// };
const CFB_API = async function(opts) {
  const api = await apiInstance.getTeams(opts);
  if (!api) {
    return "Error";
  }
  return api;
};

export default CFB_API;
