class BaseCmd {
	constructor() {
		this._command = "";
	}

	setup() {
		this._command = "";
	}

	getCommand() {
		return this._command;
	}

	onTrigger(api, msg) {
	}
}
module.exports = BaseCmd;
