// React
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { IParallax } from "@react-spring/parallax";

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

// window is not initiallized on pre-render? call inside useEffect
export const HashCheckProvider = ({ parallaxRef }) => {
  const router = useRouter();

  const locations = {
    about: 1,
    work: 2.5,
    contact: 4,
  };

  useEffect(() => {
    if (!router.isReady) return;

    const initialHashCheck = () => {
      if (!window.location.hash) return;

      const hash = window.location.hash.replace("#", "");
      if (locations[hash]) parallaxRef.current.scrollTo(locations[hash]);
      else parallaxRef.current.scrollTo(0);
    };
    initialHashCheck();

    const handleHashChangeComplete = (url, { shallow }) => {
      const hash = url.replace("/#", "");
      if (locations[hash]) parallaxRef.current.scrollTo(locations[hash]);
      else parallaxRef.current.scrollTo(0);
    };

    router.events.on("hashChangeComplete", handleHashChangeComplete);
    return () => {
      router.events.off("hashChangeComplete", handleHashChangeComplete);
    };
  }, [router.isReady, parallaxRef, locations]);

  return null;
};

export const YoutubeEmbed = ({ embedId }) => (
  <div
    style={{
      overflow: "hidden",
      paddingBottom: "56.25%",
      position: "relative",
      height: "0",
    }}
  >
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?modestbranding=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </div>
);

export const useScrollCheck = (
  container: HTMLDivElement,
  start: number,
  end: number
) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkForReverse = () => {
      if (!container) return;

      setOpen(window.scrollY >= start && window.scrollY <= end);

      requestAnimationFrame(checkForReverse);
    };

    requestAnimationFrame(checkForReverse);
  }, [container]);

  return open;
};
