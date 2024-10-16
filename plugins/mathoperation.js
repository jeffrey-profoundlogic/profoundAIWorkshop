
module.exports = {
	
    name: "Math-Operation",
    
	// The title that is displayed for this sample plugin on the plugin selection
	text: "Math Operation",
    
	// The plugin category that the sample plugin will be placed into.
	// A category will be created if the category name does not currently exist
	category: "Sample Custom User Plugins",
    
	// The help text that is displayed when the help icon is clicked on this plugin's menu
	help: `This plugin does a math operation set by the user for 2 different numbers from 2 widget sources`,
    
	// Specifies if the plugin is a client-side or server-side step. A plugin is server-side by default.
	clientSide: true,
    
	context: "rdf",
    
	// An array used to generate the plugin questions and assign values set by the user.
	questions: [

        {
            id: "firstNumber",
            text: "ID of Widget containing the first number",
            required: true,
			insertDynamic: true,
            dynamicSource: "widgets"
        },

        {
            id: "secondNumber",
            text: "ID of Widget containing the second number",
            required: true,
            insertDynamic: true,
            dynamicSource: "widgets"
        },
		
		{
			id: "operation",
			text: "Math operation",
			required: true,
			type: "dropdown",
			source: ["+","-","*","/"],
			required: true
		},
		
		{
			id: "result",
			text: "ID of Widget where result will be stored",
			required: true,
			insertDynamic: true,
			dynamicSource: "widgets"
		}
    ],
    
	// This is where code is generated for the plugin once the questions are answered.
	// You can also see this code via the "convert to code" plugin icon.
	generator: function(answers) {
		
		let result = 0;
		let code = "";
		
		switch (answers["operation"]) {
        
			case "+":
				code = 'pui.set( "' + answers.result + '", parseInt( pui.get("' + answers.firstNumber + '") ) + parseInt( pui.get("' + answers.secondNumber + '") ) );';
				break;
			case "-":
				code = 'pui.set( "' + answers.result + '", parseInt( pui.get("' + answers.firstNumber + '") ) - parseInt( pui.get("' + answers.secondNumber + '") ) );';
				break;
			case "*":
				code = 'pui.set( "' + answers.result + '", parseInt( pui.get("' + answers.firstNumber + '") ) * parseInt( pui.get("' + answers.secondNumber + '") ) );';
				break;	
			case "/":
				code = 'pui.set( "' + answers.result + '", parseInt( pui.get("' + answers.firstNumber + '") ) / parseInt( pui.get("' + answers.secondNumber + '") ) );';
				break;	
				
		}
		
        return code;
    }
}