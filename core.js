const login = require("facebook-chat-api");

class BotCore {

	constructor(config) {
		this._config = config;
		this._cmdhooks = {};
		this._api = false;
	}

	login() {
		login(this._config, (err, api) => {
			if (err) {
				console.error('Fatal error logging into FB chat.');
				process.exit(1);
			}

			this._api = api;
			api.listen((err, msg) => {
				this.onMessage(err, msg);
			});
		});
	}

	registerCommandHook(hookName, handler) {
		console.log("Registered command " + hookName);
		this._cmdhooks[hookName] = handler;
	}

	onMessage(err, msg) {
		if (err) {
			console.error("onMessage error: " + err);
			return;
		}

		if (msg.body.length < 2)
			return;

		if (msg.body.substr(0,1) !== "!")
			return;

		let buffer = msg.body.substr(1).split(" ");

		//Parse the command.
		let cmd = buffer[0].toLowerCase().trim();
		if (this._cmdhooks.hasOwnProperty(cmd))
			this._cmdhooks[cmd](this, msg, msg.body.substr(cmd.length +2));
	}

	sendMessage(msg, threadID) {
		this._api.sendMessage(msg, threadID);
	}

}
module.exports = BotCore;
