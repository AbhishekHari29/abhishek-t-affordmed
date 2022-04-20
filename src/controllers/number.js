const getNumber = async (req, res) => {
	const urlParams = req.query.url;
	const urls = Array.isArray(urlParams) ? urlParams : [urlParams];
	const result = [];
	urls.forEach(async (url) => {
		if (isValid(url)) {
			const numbers = await fetchNumbers(url);
			result.concat(numbers);
		}
	});

	const uniqueNumbers = [...new Set(result)];
	uniqueNumbers.sort();

	res.send({ numbers: uniqueNumbers });
};

const validEndPoints = ["primes", "fibo", "odd", "rand"];
const isValid = (url) => {
	const index = url.lastIndexOf("/");
	const firstPart = url.substring(0, index);
	const secondPart = url.substring(index + 1);
	return (
		firstPart === "http://localhost:8090" &&
		validEndPoints.includes(secondPart)
	);
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

module.exports = {
	getNumber
};
