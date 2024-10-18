function dataExitPoint(object) {
  // logic to evaluate data access goes here
  console.log("dataExitPoint: ", object);

  // if not authorized, throw an error
  // throw new Error("data not authorized");
}
exports.default = dataExitPoint;