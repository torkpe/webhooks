require("dotenv").config();
// const ConfigInterface = require("../interface/ConfigInterface");

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
  test: {
    use_env_variable: "",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "",
    dialect: "postgres",
  },
};
