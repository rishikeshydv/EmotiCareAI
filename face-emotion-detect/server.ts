import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = 3005;

app.set("view engine", "ejs");

app.get("/", async (req: Request, res: Response) => {
  try {
    // Fetch the video feed from your Flask API
    const videoFeedResponse = await axios.get("http://127.0.0.1:5000/video_feed", {
      responseType: "stream",
    });

    // Render the webpage and pass the video stream URL to it
    res.render("index", {
      videoStreamUrl: "/",
    });

    // Stream the video feed to the webpage
    videoFeedResponse.data.pipe(res);
  } catch (error) {
    console.error("Error fetching video feed:", (error as Error).message);
    res.status(500).send("Error fetching video feed");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
