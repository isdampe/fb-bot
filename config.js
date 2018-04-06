const fs = require('fs');

(function(module){

	this.config = {
		'email': false,
		'password': false
	};

	const parseConfig = () => {

		try {
			let fb = fs.readFileSync('config.json',{
				encoding: "utf8"
			});

			this.config = JSON.parse(fb);

			if (this.config.email == false || this.config.password == false) {
				console.error("Missing email or password in config.json. Exiting.");
				process.exit(1);
			}

		} catch (e) {
			console.error('No config.json file found. Exiting.');
			process.exit(1);
		}
		return this.config;
	};

	module.exports = parseConfig();

})(module);
