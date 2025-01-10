import React, { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "@/app-state";

type Props = {
  children: ReactNode;
};

const variantsGoDown = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const variantsGoUp = {
  initial: {
    opacity: 0,
    scale: 1.08,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const AnimatedLayout = ({ children }: Props): React.JSX.Element => {
  const { appState } = useContext(AppContext);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={appState.pageTransition === "down" ? variantsGoDown : variantsGoUp}
      className="relative"
      style={{ overflow: "hidden" }} // Ensure smooth transition
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
