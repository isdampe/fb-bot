const base = require("./_base.js");

class Echo extends base {
	setup() {
		this._command = "echo";
	}

	onTrigger(core, msgRaw, msgParsed) {
		if (msgParsed.length < 1)
			return;
		core.sendMessage(msgParsed, msgRaw.threadID);
	}
}

module.exports = Echo;
