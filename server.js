// Load external libraries
import express from "express";

// Setup Express
const app = express();
app.use(express.json());

// Listed for incomming requests
const listener = app.listen(process.env.PORT, () => {
  console.log("The API is listening on port " + listener.address().port);
});
