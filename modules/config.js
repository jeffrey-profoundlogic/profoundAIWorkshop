const fs = require("fs");
const path = require("path");

let currentDir = __dirname;

module.exports = {
  "port": parseInt(process.env.PORT),
  "pathlist": [
    "NORTHWIND",
    "pjssamples",
    "customerservice",
    "myaiagent",
    "utils",
  ],
  "initialModules": {
    "/hello": "pjssamples/hello",
    "/hello2": "pjssamples/hello2",
    "/connect4": "pjssamples/connect4",
    "/upload": "pjssamples/upload",
    "/customerservice": "customerservice/customers.json"
  },
  "databaseConnections": [
    {
      "name": "default",
      "default": true,
      "driver": "IBMi",
      "driverOptions": {
        "SQL_ATTR_COMMIT": "SQL_TXN_NO_COMMIT"
      }
    }
  ],
  pjscallKeys: [
    process.env.PJS_CALL_KEY
  ],
  "timeout": 3600,
  "defaultMode": "case-sensitive",
  "connectorLibrary": "PJSPOCDEMO",
  "profounduiLibrary": "PUIPOCDEMO",
  "connectorURL": "http://65.183.178.37:9981/",
  "connectorCredentials": path.resolve(currentDir, "../credentials"),
  "encryptionKey": fs.readFileSync(path.join(currentDir, "../ekey")),
  "connectorIPFilter": (ip) => true,
  "showIBMiParmDefn": true,
  "userdataDirectory": path.resolve(currentDir, "../userdata"),
  "modulesDirectory": path.resolve(currentDir, "../modules"),
  models: {
    "GPT-4o": {
      provider: "openai",
      model: "gpt-4o",
      apiKey: process.env.OPENAI_API_KEY,
      defaultAssistantId: process.env.OPENAI_ASSISTANT_ID
    },
  }
}
