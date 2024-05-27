const allowedCors = [
	"https://practicum.yandex.ru",
	"https://students-projects.ru",
	"http://localhost:3000",
	"http://localhost:3001",
	"mongodb://localhost:27017"
]

export const cors = (request, response, next) => {
	const {origin} = request.headers;

	if (allowedCors.includes(origin)) {
			// response.header('Access-Control-Allow-Origin', '*'); // To ignore the clean slate
			response.header('Access-Control-Allow-Origin', origin);
			response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			response.header('Access-Control-Allow-Headers', 'Content-type,Authorization,Accept,X-Custom-Header');
	}

	next();
}
