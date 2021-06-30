const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const enforce = require("enforce");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(
	"sk_test_51J2FKVGo3pNi5tJZopdH1mizAe6862VQwLQftsLUBDEEWMdjF1toh7t89nRcZzd0qV1Vq9b2QelWISHJxCMqkGMX00aO1CB1Er"
);
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
if (process.env.NODE_ENV === "production") {
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(patrh.join(__dirname, "client/build", "index.html"));
	});
}
app.listen(port, (error) => {
	if (error) throw error;
	console.log("Server on port " + port);
});

app.post("/payment", (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: "pln",
	};
	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).send({ error: error });
		} else {
			res.status(200).send({ success: stripeRes });
		}
	});
});
