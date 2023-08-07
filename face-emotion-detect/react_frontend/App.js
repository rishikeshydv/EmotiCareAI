import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPlayer from 'videoPlayer';

const App = () => {
  const [videoStreamUrl, setVideoStreamUrl] = useState('');

  useEffect(() => {
    // Fetch the video feed URL from the server
    axios
      .get('/video_feed_url')
      .then(response => setVideoStreamUrl(response.data.video_feed_url))
      .catch(error => console.error('Error fetching video feed URL:', error.message));
  }, []);

  return (
    <div>
      <h1>Real-Time Video</h1>
      {videoStreamUrl && <video src={videoStreamUrl} autoPlay playsInline controls />}
      <VideoPlayer />
    </div>
  );
};

export default App;
