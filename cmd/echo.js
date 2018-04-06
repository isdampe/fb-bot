const base = require("./_base.js");

class Echo extends base {
	setup() {
		this._command = "echo";
	}

	onTrigger(api, msgRaw, msgParsed) {
		if (msgParsed.length < 1)
			return;
		api.sendMessage(msgParsed, msgRaw.threadID);
	}
}

module.exports = Echo;
