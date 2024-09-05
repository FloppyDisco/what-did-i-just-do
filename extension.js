const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1);
	statusBarItem.text = 'Anti-Vim';
	statusBarItem.tooltip = 'Be Warned!! This is not for the faint of heart...';
	statusBarItem.show();
	context.subscriptions.push(statusBarItem);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
