class BaseCmd {
	constructor(core) {
		this._command = "";
		this._core = core;
	}

	setup() {
		this._command = "";
	}

	getCommand() {
		return this._command;
	}

	onTrigger(core, msg) {
	}
}
module.exports = BaseCmd;
