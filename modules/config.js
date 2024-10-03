const fs = require("fs");
const path = require("path");

let currentDir = __dirname;

module.exports = {
  "port": parseInt(process.env.PORT),
  "pathlist": [
    "PJS_ENV",
    "NORTHWIND",
    "pjssamples",
    "newAPIs"
  ],
  "initialModules": {
    "/hello": "pjssamples/hello",
    "/hello2": "pjssamples/hello2",
    "/connect4": "pjssamples/connect4",
    "/upload": "pjssamples/upload"
  },
  "databaseConnections": [
    {
      "name": "default",
      "default": true,
      "driver": "IBMi",
      "driverOptions": {
        "SQL_ATTR_COMMIT": "SQL_TXN_NO_COMMIT"
      }
    },
    {
      "name": "MSSQL",
      "driver": "mssql",
      "credentialsFile": path.resolve(currentDir, "../mssql_credentials"),
      "driverOptions": {
        "server": "18.220.19.245",
        "database": "northwind",
        "options": { "enableArithAbort": false },
        "pool": {
          "max": 50,
          "min": 0,
          "idleTimeoutMillis": 30000
        }
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
  "modulesDirectory": path.resolve(currentDir, "../modules")
}
