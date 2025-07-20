// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": ["babel-jest", { configFile: "./babel-jest.config.js" }]
  },
moduleNameMapper: {
  "^@/utils/(.*)$": "<rootDir>/utils/$1",
}

};
