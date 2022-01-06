import React, { useEffect, useRef } from "react";
import ReactPlayer, { Config } from "react-player";

// Video
const video = "/video/transitions/new_1.mp4";

const Transition: React.FC<{ container: HTMLDivElement }> = ({ container }) => {
  const ref = useRef<ReactPlayer>();

  useEffect(() => {
    registerVideo(container, ref.current);
  }, [container, ref]);

  const registerVideo = (bound: HTMLDivElement, video: ReactPlayer) => {
    const scrollVideo = () => {
      if (video.getDuration()) {
        // const distanceFromTop =
        //   window.scrollY + bound.getBoundingClientRect().top;
        // const rawPercentScrolled =
        //   (window.scrollY - distanceFromTop) /
        //   (bound.scrollHeight - window.innerHeight);
        // const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

        const playbackConst = 2000;
        const frameNumber = window.scrollY / playbackConst;

        console.log(window.scrollY, frameNumber);

        video.seekTo(frameNumber, "seconds");
      }
      requestAnimationFrame(scrollVideo);
    };
    requestAnimationFrame(scrollVideo);
  };

  return <ReactPlayer url={video} ref={ref} height="100%" width="100%" />;
};

export default Transition;
