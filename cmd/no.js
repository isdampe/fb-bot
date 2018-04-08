const base = require("./_base.js");

class No extends base {
	setup() {
		this._command = "no";
	}

	onTrigger(core, msgRaw, msgParsed) {
		core.sendMessage("*Deep voice* NO!!!!!", msgRaw.threadID);
	}
}

module.exports = No;
