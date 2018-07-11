const fs = require("fs");
const sprintf = require("util").format;

class Logger {
	constructor(outputPath) {
		this.outputPath = outputPath;
	}

	appendMessage(message) {
		//Note: Set uri based on both senderID and threadID.
		//This is to ensure confidential logging doesn't later get leaked out
		//into group chats.
		let uri = sprintf("%s/%s-%s.log", this.outputPath, message.senderID, message.threadID);
		let buffer = sprintf("%s\n", JSON.stringify([message.timestamp, message.body]));
		fs.appendFile(uri, buffer, (err) => {
			if (err)
				console.error(err)
		})
	}
}

module.exports = Logger;