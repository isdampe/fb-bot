const base = require("./_base.js");

class No extends base {
	setup() {
		this._command = "no";
	}

	onTrigger(api, msgRaw, msgParsed) {
		api.sendMessage("*Deep voice* NO!!!!!", msgRaw.threadID);
	}
}

module.exports = No;
