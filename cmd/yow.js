const base = require("./_base.js");

class Yow extends base {
	setup() {
		this._command = "yow";
	}

	onTrigger(core, msgRaw, msgParsed) {
		let yowmoms = [
			"Yo momma's teeth are so yellow, when she smiled at traffic, it slowed down",
			"Yo momma's so fat, she brought a spoon to the Super Bowl",
			"Yo momma's so stupid, she put lipstick on her forehead to make up her mind",
			"Yo momma's so fat, when she went to the beach, all the whales started singing 'We Are Family'",
			"Yo momma's so fat, even Dora can't explore her",
			"Yo momma's so short, she has to slam dunk her bus fare",
			"Yo momma's so stupid, she thought a quarterback was a refund",
			"Yo momma's so old, her breast milk is actually powder",
			"Yo momma's so fat, she has to wear six different watches: one for each time zone",
			"Yo momma's so fat, she stepped on a scale and it said: 'to be continued'",

		];
		let yow = yowmoms[Math.floor(Math.random() * yowmoms.length)];
		core.sendMessage(yow, msgRaw.threadID);
	}
}

module.exports = Yow;

//reference from buzzfeed: https://www.buzzfeed.com/kaylayandoli/yo-momma
