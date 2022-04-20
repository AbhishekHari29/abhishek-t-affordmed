const getNumber = async (req, res) => {
	const urlParams = req.query.url;
	const urls = Array.isArray(urlParams) ? urlParams : [urlParams];
	const result = [];
	urls.forEach(async (url) => {
		result = [...result, await fetchNumbers(url)];
	});
	res.send(result);
};

const fetchNumbers = async (url) => {
	try {
		const numbers = await fetch(url);
		const response = await numbers.json();
		if (!response.ok) return [];
		return response.numbers;
	} catch (error) {
		return [];
	}
};

const isValidURL = (urlString) => {
	let url;
	try {
		url = new URL(url);
	} catch (error) {
		return false;
	}
	return true;
};

module.exports = {
	getNumber
};
