const words = ["bonfire", "cardio", "case", "character", "bonsai"];

const getPrefix = async (req, res) => {
	const keywords = req.query.keywords.split(",");
	const result = [];
	keywords.forEach((keyword) => {
		const res = {
			keyword
		};

		if (words.includes(keyword)) {
			res.status = "found";
			res.prefix = findPrefix(keyword, words);
		} else {
			res.status = "not_found";
			res.prefix = "not_applicable";
		}
		result.push(res);
	});
	res.send(result);
};

const findPrefix = (keyword, words) => {
	for (let i = 1; i < keyword.length; i++) {
		const prefix = keyword.substring(0, i);
		let count = 0;
		words.forEach((word) => {
			if (word.startsWith(prefix)) count++;
		});
		if (count === 1) return prefix;
	}
};

module.exports = {
	getPrefix
};
