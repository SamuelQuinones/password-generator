import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, CheckCircle } from "components/SVG-Icons";

type ActiveIconProps = {
  usingTheme: boolean;
  theme: string;
};

const check = {
  in: {
    y: 0,
    opacity: 1,
  },
  out: {
    y: "-100%",
    opacity: 0,
  },
};

const palette = {
  in: {
    y: 0,
    opacity: 1,
  },
  out: {
    y: "100%",
    opacity: 0,
  },
};

const transition = {
  y: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};

const ActiveIcon: FC<ActiveIconProps> = ({ usingTheme, theme }) => {
  return (
    <div className="changer-wrapper relative mx-1 flex h-9 w-9 flex-col items-center justify-center overflow-hidden rounded-full border-2 shadow-lg transition duration-250">
      <AnimatePresence initial={false}>
        {usingTheme && (
          <motion.div
            key="using"
            variants={check}
            transition={transition}
            initial="out"
            animate="in"
            exit="out"
            className="absolute"
          >
            <CheckCircle
              className="inline-block"
              title={`Using ${theme} Theme`}
              width={20}
              height={20}
            />
          </motion.div>
        )}
        {!usingTheme && (
          <motion.div
            key="switch"
            variants={palette}
            transition={transition}
            initial="out"
            animate="in"
            exit="out"
            className="absolute"
          >
            <Palette
              className="inline-block"
              title={`Switch to ${theme} Theme`}
              width={20}
              height={20}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActiveIcon;
