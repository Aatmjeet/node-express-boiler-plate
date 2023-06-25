const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser")



const app = express();

app.use(cors())

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


app.get('/', async(req, res) => {
	res.status(200).json("Hello world");
});

// Start the server
app.listen(3000, () => {
	console.log('Server started on port 3001');
});
