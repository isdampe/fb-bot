const base = require("./_base.js");

class Joke extends base {
	setup() {
		this._command = "joke";
	}

	onTrigger(core, msgRaw, msgParsed) {
		let jokes = [
			'C#.',
			'Visual Studio.',
			'D. Talent',
			'01101001.',
			'Stewart.',
			'Half 1337, fully primed.'
		];
		let joke = jokes[Math.floor(Math.random() * jokes.length)];
		core.sendMessage(joke, msgRaw.threadID);
	}
}

module.exports = Joke;
