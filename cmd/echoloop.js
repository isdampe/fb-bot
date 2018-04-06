const base = require("./_base.js");

class EchoLoop extends base {
	setup() {
		this._command = "echoloop";
	}

	onTrigger(api, msgRaw, msgParsed) {
		let argv = msgParsed.split(" ");
		if (argv.length < 2) {
			api.sendMessage("Fucking syntax: !echoloop [n] [message]", msgRaw.threadID);
			return;
		}

		var n = argv[0];
		if (isNaN(n)) {
			api.sendMessage("Fucking syntax: !echoloop [n] [message]", msgRaw.threadID);
			return;
		}

		var newMsg = msgParsed.substr(n.length +1);

		n = parseInt(n);
		if (n < 1)
			n = 1;
		if (n > 10)
			n = 10;

		for(var i=0; i<n; ++i) {
			setTimeout(() => {
				api.sendMessage(newMsg, msgRaw.threadID);
			}, 1000 * i);
		}

	}
}

module.exports = EchoLoop;
