import React, { useRef, useState } from 'react';

const VideoPlayerSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayback = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative bg-black aspect-video rounded-md overflow-hidden shadow-md">
            <video
                ref={videoRef}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                className="w-full h-full object-cover"
                controls={true}
            />
        </div>
    );
};

export default VideoPlayerSection;
