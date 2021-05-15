import { useEffect, useState } from "react";

/**
 * Custom hook that returns a boolean to be used to control rendering / postpone until the dom mounts.
 *
 * Intended for use with state that can differ from their initial value:
 * - animations
 * - toggle switch values
 *
 * @returns is the component mounted
 */
export const useRenderOnMount = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
