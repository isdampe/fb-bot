const base = require("./_base.js");

class Yes extends base {
	setup() {
		this._command = "yes";
	}

	onTrigger(core, msgRaw, msgParsed) {
		core.sendMessage("*_Deep voice_* HELL YESS!!!!!", msgRaw.threadID);
	}
}

module.exports = Yes;
