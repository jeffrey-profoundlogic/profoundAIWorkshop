/* 

  Profound UI download API (pui.download) Exit Program

  Provides security for file downloads, see here:

  https://docs.profoundlogic.com/x/BwCa

*/

const path = require("path");

function puidnlexit(timingFlag, inputData, stmfDir, stmfName, attName, contentType, allow) {

  pjs.define("timingFlag", { type: "integer", length: 10, refParm: timingFlag });
  pjs.define("inputData", { type: "data structure", qualified: true, refParm: inputData,
    elements: {
      "fileid": { type: "varchar", length: 640 },
      "userid": { type: "char", length: 10 },
      "ipAddr": { type: "char", length: 15 },
      "inline": { type: "boolean" },
    }
  });
  pjs.define("stmfDir", { type: "varchar", length: 640, refParm: stmfDir });
  pjs.define("stmfName", { type: "varchar", length: 256, refParm: stmfName });
  pjs.define("attName", { type: "varchar", length: 256, refParm: attName });
  pjs.define("contentType", { type: "varchar", length: 255, refParm: contentType });
  pjs.define("allow", { type: "integer", length: 5, refParm: allow });


  // For example...
  allow = 0;

  // to allow downloads from the /var/downloads directory, 
  // un-comment this:
  // if (stmfDir === '/var/downloads') {
  //   allow = 1;
  // }
  // ... or, write code to suit your needs.

  flags["LR"] = true;
  
}

exports.run = puidnlexit;
