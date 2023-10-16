import React, { useRef, useEffect } from 'react';

const VideoComponent = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Programmatically trigger video playback
//     videoRef.current.play();
//   }, []);

  return (
    <video autoPlay width="400" height="300">
    <source src="D:\College\project\Medibase\medibase_frontend\src\finperprint_scan.mp4" type="video/mp4" />

    Your browser does not support the video tag.
  </video>
  )
}

export default VideoComponent