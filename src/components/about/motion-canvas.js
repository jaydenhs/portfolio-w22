import * as React from "react";
import { useContext, useLayoutEffect, useEffect, useMemo, useRef } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { MotionContext } from "framer-motion";

/**
 * The following is a proposal for an API that provides a bridge from the DOM world
 * into the Three world. Any Motion APIs herein are undocumented and expected to change.
 */
export default function MotionCanvas({ children, resize = {}, ...props }) {
  const motionContext = useContext(MotionContext);
  const [forceResize, polyfill] = useLayoutResize();

  return (
    <Canvas {...props} resize={{ ...resize, polyfill }}>
      <MotionContext.Provider value={motionContext}>
        {motionContext.visualElement && (
          <LayoutCamera forceResize={forceResize} />
        )}
        {children}
      </MotionContext.Provider>
    </Canvas>
  );
}

function LayoutCamera({ forceResize }) {
  const three = useThree();
  const { visualElement } = useContext(MotionContext);

  useLayoutEffect(() => {
    const unsubViewportBox = visualElement.onViewportBoxUpdate(({ x, y }) => {
      const { camera } = three;
      camera.aspect = (x.max - x.min) / (y.max - y.min);
      camera.updateProjectionMatrix();
    });

    const unsubLayout = visualElement.onLayoutMeasure(({ x, y }) => {
      const { gl } = three;
      forceResize.current();
      gl.setSize(x.max - x.min, y.max - y.min);
      // TODO: At high layout deltas it would be good to render at a higher
      // resolution to improve the pixelation effect
    });

    return () => {
      unsubViewportBox();
      unsubLayout();
    };
  }, []);
  return null;
}

/**
 * We need to provide a dummy ResizeObserver as Motion schedules layout
 * resizing quite closely to enable accurate measurements. This might
 * need to be coupled with a hook that re-renders the element when the window
 * resizes to enable the existing functionality.
 */
function useLayoutResize() {
  const forceResize = useRef(null);

  useEffect(() => {
    forceResize.current();
  }, []);

  const Resize = useMemo(() => {
    return class Resize {
      constructor(callback) {
        forceResize.current = callback;
      }
      observe() {}
      disconnect() {}
    };
  }, []);

  return [forceResize, Resize];
}
