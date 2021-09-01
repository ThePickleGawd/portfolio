// React
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
      router.events.off("hashRouteChangeComplete", handleHashChangeComplete);
    };
  }, []);

  return null;
};
