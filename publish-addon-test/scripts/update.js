
async function update() {
	const podcast = process.env.PODCAST;
	if (typeof podcast == "undefined") {
		throw new Error("Podcast property not defined.");
	}

	console.log(`++ Updating podcast: ${podcast}`);
}

if (require.main === module) {
	update();
}

module.exports = update;