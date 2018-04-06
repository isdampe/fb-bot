const base = require("./_base.js");

class Yes extends base {
	setup() {
		this._command = "yes";
	}

	onTrigger(api, msgRaw, msgParsed) {
		api.sendMessage("*_Deep voice_* HELL YESS!!!!!", msgRaw.threadID);
	}
}

module.exports = Yes;
