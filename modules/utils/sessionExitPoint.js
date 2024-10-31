function sessionExitPoint(data) {
  
  const sessionId = pjs.getSessionId();
 
  console.log("sessionExitPoint: ", data);
  console.log("sessionId: ", sessionId);

  let myData = {};
  myData.sessionId = sessionId;
  return myData;
}
exports.default = sessionExitPoint;