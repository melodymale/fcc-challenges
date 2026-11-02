import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

const handleTimestamp = (req, res) => {
  const dateStr = req.params.date;
  let date;

  // 1. Handle empty parameter (Return Current Time)
  if (!dateStr) {
    date = new Date();
  } else {
    // 2. Strict Check: Only convert using parseInt if the string is purely digits
    // This stops date strings starting with numbers (like "05 October 2011") from breaking.
    if (/^\d+$/.test(dateStr)) {
      date = new Date(parseInt(dateStr, 10));
    } else {
      // Otherwise, parse it natively as a text date string
      date = new Date(dateStr);
    }
  }

  // 3. Handle Invalid Dates cleanly
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // 4. Send expected valid output format
  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
};

app.get("/api", handleTimestamp);
app.get("/api/:date", handleTimestamp);

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
