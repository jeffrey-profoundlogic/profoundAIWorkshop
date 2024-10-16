const https = require('https');

module.exports = {
  name: "Load Module",

  text: "Load External Node.js Module",

  defaultDescription: "Load External Module",

  category: "Sample Custom User Plugins",

  help: `This action allows to load and use external modules in your low code routine.`,

  questions: [
    {
      id: "work_variable",
      text: "Enter work variable name",
      type: "multi-select",
      singleSelection: true,
      source: "variables",
      varTypes: ["work"],
      captureInto: "work",
      captureType: function(answers) {
        if (!answers["capture_as"]) return "values";
        return answers["capture_as"].toLowerCase() + "s";
      },
      filter: function(answers) {
        if (!answers["capture_as"]) return "values";
        return answers["capture_as"].toLowerCase() + "s";
      },
      required: true,
      validation: function(varname) {
        let msg = pui.designUtils.validateName(varname, "var");
        if (msg) msg = "Work variable name " + msg;
        return msg;
      },
      condition: function(answers) {
        return (answers["capture_response"] && answers.destination === "Work variable");
      }
    },
    {
      id: "module",
      text: "Load External Module",
      required: true,
      insertDynamic: true,
      type: "textbox",
    }
  ],

  generator: function(answers) {
    let code = "";
    code = `var ${answers["work_variable"]} = require('${answers["module"]}');`;
    return code;
  }
};