const base = require("./_base.js");

class Joke extends base {
	setup() {
		this._command = "joke";
	}

	onTrigger(api, msgRaw, msgParsed) {
		let jokes = [
			'C#.',
			'Visual Studio.'
		];
		let joke = jokes[Math.floor(Math.random() * jokes.length)];
		api.sendMessage(joke, msgRaw.threadID);
	}
}

module.exports = Joke;