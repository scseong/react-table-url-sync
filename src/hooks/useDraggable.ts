import { useState, useCallback, type RefObject } from "react";
import { throttle } from "@/utils/throttle";

type DraggableHook = {
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
};

export const useDraggable = <T extends HTMLElement = HTMLElement>(
  scrollerRef: RefObject<T | null>
): DraggableHook => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [totalX, setTotalX] = useState<number>(0);

  const preventUnexpectedEvents = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const preventUnexpectedEventsDOM = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart = (e: React.MouseEvent) => {
    preventUnexpectedEvents(e);
    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (scrollerRef.current && "scrollLeft" in scrollerRef.current) {
      setTotalX(x + scrollerRef.current.scrollLeft);
    }
  };

  const onDragEnd = (e: React.MouseEvent) => {
    if (!isDragging) return;
    if (!scrollerRef.current) return;

    setIsDragging(false);

    const endX = e.clientX;
    const childNodes = [...(scrollerRef.current?.childNodes || [])];
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener("click", preventUnexpectedEventsDOM);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener("click", preventUnexpectedEventsDOM);
      });
    }
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    throttle(function () {
      preventUnexpectedEvents(e);

      const scrollLeft = totalX - e.clientX;

      if (scrollerRef.current && "scrollLeft" in scrollerRef.current) {
        scrollerRef.current.scrollLeft = scrollLeft;
      }
    }, 100);
  };

  return {
    isDragging,
    onMouseDown: onDragStart,
    onMouseMove: onDragMove,
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd
  };
};
