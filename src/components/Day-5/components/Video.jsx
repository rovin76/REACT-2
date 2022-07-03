import React, { useRef } from "react";

const Video = () => {
  const ref = useRef(null);

  const start = () => {
    ref.current.play();
  };

  const stop = () => {
    ref.current.pause();
  };
  return (
    <div>
      <video
        ref={ref}
        width="200px"
        type="video/mp4"
        src="https://media.istockphoto.com/videos/apple-tree-branch-with-green-foliage-and-heavy-rain-in-the-sunlight-video-id1225085759"
      />
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Pause</button>
      </div>
    </div>
  );
};

export default Video;
