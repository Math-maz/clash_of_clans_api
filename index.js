require("dotenv").config();
const wrapperApi = require("./wrapperApi");
wrapperApi.getClans({ name: "test" });
