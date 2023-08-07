import VideoCam from "../components/VideoCam";
import VideoResponse from "../components/VideoResponse";


export default function VideoPage() {
    return (
        <div className="flex md:flex-row flex-col items-center w-full">
            <VideoCam />
            <VideoResponse />
        </div>
    )
}