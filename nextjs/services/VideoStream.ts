import axios from "axios";

export const VideoStream = async (videoSrc: string) => {
  try {
    const response = await axios.post("http:localhost:5000/video_feed", {
      videoSrc,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
