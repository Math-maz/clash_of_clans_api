const axios = require("axios");
const { formatParamString } = require("../utils");
module.exports = function getClans({
  name = null,
  minMembers = null,
  maxMembers = null,
  minClanLevel = null
}) {
  const paramString = formatParamString(
    name,
    minMembers,
    maxMembers,
    minClanLevel
  );
  axios
    .get(`https://api.clashofclans.com/v1/clans?${paramString}`, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` }
    })
    .then(res => console.log(res.data.items))
    .catch(err => console.log(err));
};
