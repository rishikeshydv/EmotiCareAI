"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactTyped from "react-typed";


const VideoResponse = () => {
    

    return (
        <div className="w-full h-full">
            {/* Data will be shown here */}
            <h2>
                <ReactTyped
                    strings={[
                        "My name is Emoticare and I'm here to make life easier for you.",
                        "I'm here to help you with your mental health.",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </h2>
        </div>
    )
}

export default VideoResponse;