const base = require("./_base.js");

class Memory extends base {

	setup() {
		this._command = "memory";
	}

	onTrigger(core, msgRaw, msgParsed) {
		let argv = msgParsed.split(" ");
		if (argv.length < 1) {
			core.sendMessage("Fucking syntax: !memory [key] [=] [...value]", msgRaw.threadID);
			return;
		}
	
		var i = msgParsed.indexOf("=");
		if (i > -1) {
			//Set.
			let key = msgParsed.substr(0, i).trim();
			let value = msgParsed.substr(i + 1).trim() || false;
			core.setMemory(msgRaw.threadID, key, value);
			core.sendMessage("*Got it!*", msgRaw.threadID);
		} else {
			//Get.
			let key = msgParsed.trim();
			let value = core.getMemory(msgRaw.threadID, key) || "I don't fucking know that.";
			core.sendMessage(value, msgRaw.threadID);
		}
		
	}
}

module.exports = Memory;
