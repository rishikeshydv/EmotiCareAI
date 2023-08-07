"use client";
import { VideoStream } from "@/services/VideoStream";
import { MutableRefObject, useEffect, useRef } from "react";
import Webcam from "react-webcam";


const WebCam = () => {
    const webcamRef = useRef<MutableRefObject| null>(null);

    const handleVideoStream = () => {
        const captureFrame = () => {
          if (webcamRef && webcamRef.current) {
            // Capture the current video frame as base64 data
            const videoSrc = webcamRef.current.getScreenshot();
            // Emit the video frame to the backend using WebSockets
            VideoStream(videoSrc);
          }
          requestAnimationFrame(captureFrame);
        };
        requestAnimationFrame(captureFrame);
    }

    useEffect(() => {
        console.log(webcamRef.current?.getScreenshot());
    }, [webcamRef.current])

    return (
      <div className="w-full bg-[#050b0e] items-center justify-center h-full">
        <Webcam 
            ref={webcamRef}
            className=" w-full h-full"
            audio={false}
            height={300}
            width={300}
            screenshotFormat="image/jpeg"
            videoConstraints={{
                facingMode: "user"
            }}
        />
        <span className="w-full flex items-center justify-center -translate-y-5">
            <button 
            className="bg-[#306E88] font-semibold text-lg text-[#fff] px-4 py-2 rounded-lg "
            onClick={handleVideoStream}>Start video</button>
        </span>
      </div>
    );
}

export default WebCam