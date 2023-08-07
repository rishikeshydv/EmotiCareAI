import React, { useRef } from 'react';
import axios from 'axios';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handleCaptureClick = async () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
      // Send the captured image as a "request"
      const formData = new FormData();
      formData.append('request', imageBlob);
      await axios.post('/capture_request', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Photo captured and sent as request!');
    } catch (error) {
      console.error('Error capturing and sending the request:', error.message);
      alert('Error capturing and sending the request');
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline controls />
      <button onClick={handleCaptureClick}>Capture Photo</button>
    </div>
  );
};

export default VideoPlayer;
