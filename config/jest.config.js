const config = {
  clearMocks: true,
  rootDir: "../",
  setupFilesAfterEnv: [
    "<rootDir>/config/jest.environment"
  ],
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules"
  ]
}

if(process.env.CI){
  config.collectCoverage = false
} else {
  config.collectCoverage = true
  config.coverageDirectory = "coverage"
  config.coveragePathIgnorePatterns = [
    "/node_modules"
  ]
}

module.exports = config
