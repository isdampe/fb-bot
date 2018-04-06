const fs = require("fs");
const config = require("./config.js");
const botCore = require('./core.js');

const bot = new botCore(config);
const cmds = [];

var dirBuffer = fs.readdirSync("cmd");
for (var file of dirBuffer) {
	if (file.substr(0,1) === "_" || file.substr(file.length -2) !== "js")
		continue;
	let cr = require("./cmd/" + file); let cc = new cr(); cc.setup();
	bot.registerCommandHook(cc.getCommand(), cc.onTrigger);
}

bot.login();
