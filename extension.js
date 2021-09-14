// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, "v-zai-extension" is now active!');
	// this console message is printed only once and then it wont print again and again
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('v-zai-extension.v-zai', function () {
		// The code you place here will be executed every time your command is executed
		var time = new Date()
		let displayDate = time.toLocaleDateString()
		let displayTime = time.toLocaleTimeString()
		let displayMsg = `Date: ${displayDate}\nTime: ${displayTime}`

		// Display a message box to the user
		vscode.window.showInformationMessage(displayMsg);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
