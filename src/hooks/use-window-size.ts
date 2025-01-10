import { throttle } from "@/lib/throttle";
import { useState, useEffect, useCallback } from "react";

const BREAKPOINTS = [
  { name: "xs", width: 0 },
  { name: "sm", width: 640 },
  { name: "md", width: 768 },
  { name: "lg", width: 1024 },
  { name: "xl", width: 1280 },
  { name: "2xl", width: 1536 },
];

interface Size {
  width: number;
  height: number;
}

type ScreenSizeName = (typeof BREAKPOINTS)[number]["name"];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screen, setScreen] = useState<ScreenSizeName>("mobile");

  const isScreenSizeSmallerThan = (name: ScreenSizeName) => {
    return (
      BREAKPOINTS.findIndex((b) => b.name === screen) <
      BREAKPOINTS.findIndex((b) => b.name === name)
    );
  };
  const isScreenSizeLargerThan = useCallback(
    (name: ScreenSizeName) => {
      return (
        BREAKPOINTS.findIndex((b) => b.name === screen) >
        BREAKPOINTS.findIndex((b) => b.name === name)
      );
    },
    [screen],
  );
  useEffect(() => {
    const handleResize = () => {
      const wSize = window.innerWidth;
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const reverseBreakpoints = [...BREAKPOINTS].reverse();
      const screenItem = reverseBreakpoints.find((b) => wSize >= b.width);
      if (screenItem) {
        setScreen(screenItem.name);
      }
    };

    const [delayHandleResize] = throttle(handleResize, 100);
    window.addEventListener("resize", delayHandleResize);
    handleResize();
    return () => window.removeEventListener("resize", delayHandleResize);
  }, []);

  return {
    windowSize,
    screen,
    isScreenSizeSmallerThan,
    isScreenSizeLargerThan,
  };
}

export {
  useWindowSize
};
