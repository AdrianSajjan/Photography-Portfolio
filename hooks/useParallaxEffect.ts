import { MutableRefObject, useCallback, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@hooks/useIsomorphicLayoutEffect";
import { MotionValue, useTransform, useViewportScroll } from "framer-motion";

interface UseParallaxEffectProps {
  reverse?: boolean;
  vertical?: boolean;
  accelarate?: number;
  finalOffset?: number;
  initialOffset?: number;
}

export function useParallaxEffect<T>({
  reverse,
  accelarate = 1,
  finalOffset = 0,
  vertical = false,
  initialOffset = 0,
}: UseParallaxEffectProps): [MutableRefObject<T>, MotionValue<number>] {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + elementHeight;

  const multiplier = reverse ? -accelarate : accelarate;

  const y = useTransform(
    scrollY,
    [initial, final],
    [multiplier * (elementHeight - initialOffset), -(multiplier * (elementHeight + finalOffset))]
  );

  const onResize = useCallback(() => {
    const element = ref.current;
    const rect = element.getBoundingClientRect();
    setClientHeight(window.innerHeight);
    setElementHeight(vertical ? rect.width : rect.height);
    setElementTop(rect.top + window.scrollY || window.pageYOffset);
  }, [ref, vertical]);

  useIsomorphicLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return [ref, y];
}
