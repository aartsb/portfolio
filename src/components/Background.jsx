import React, { useRef, useEffect } from 'react';

const Background = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Set the start time to 7 minutes (420 seconds)
            video.currentTime = 420;

            // Force play with error handling
            const playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Video is playing');
                    })
                    .catch(error => {
                        console.log('Autoplay prevented:', error);
                        // If autoplay fails, try playing on first user interaction
                        const playOnInteraction = () => {
                            video.play();
                            document.removeEventListener('click', playOnInteraction);
                        };
                        document.addEventListener('click', playOnInteraction);
                    });
            }
        }
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black">
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={`${import.meta.env.BASE_URL}unravel-bg.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-50 pointer-events-none" />
        </div>
    );
};

export default Background;
