"use client";

import { useEffect, useRef } from "react";

type CursorState = "default" | "link" | "cta" | "dark";

const STATE_STYLES: Record<
  CursorState,
  { size: number; border: string; fill: string; glow: string; showArrow: boolean }
> = {
  default: { size: 20, border: "#00C896", fill: "transparent", glow: "none", showArrow: false },
  link: { size: 20, border: "#FFFFFF", fill: "rgba(0, 200, 150, 0.15)", glow: "none", showArrow: true },
  cta: { size: 40, border: "#00C896", fill: "transparent", glow: "0 0 20px rgba(0, 200, 150, 0.6), 0 0 40px rgba(0, 200, 150, 0.3)", showArrow: false },
  dark: { size: 20, border: "#FFFFFF", fill: "transparent", glow: "none", showArrow: false },
};

export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || prefersReduced) return;

    const root = rootRef.current;
    const ring = ringRef.current;
    const arrow = arrowRef.current;
    if (!root || !ring || !arrow) return;

    document.documentElement.classList.add("custom-cursor-active");
    root.style.opacity = "0";

    let x = -100;
    let y = -100;
    let visible = false;
    let clicking = false;
    let state: CursorState = "default";
    let rafId = 0;

    const applyState = (next: CursorState) => {
      if (state === next) return;
      state = next;
      const s = STATE_STYLES[next];
      ring.style.width = `${s.size}px`;
      ring.style.height = `${s.size}px`;
      ring.style.marginLeft = `${-s.size / 2}px`;
      ring.style.marginTop = `${-s.size / 2}px`;
      ring.style.borderColor = s.border;
      ring.style.backgroundColor = s.fill;
      ring.style.boxShadow = s.glow;
      arrow.style.display = s.showArrow ? "block" : "none";
    };

    const paint = () => {
      root.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${clicking ? 0.8 : 1})`;
      root.style.opacity = visible ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      visible = true;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(paint);
    };

    const resolveState = (target: EventTarget | null) => {
      const el = target as HTMLElement | null;
      if (!el) return applyState("default");

      const interactive = el.closest("[data-cursor]") as HTMLElement | null;
      if (interactive?.dataset.cursor === "cta") return applyState("cta");
      if (interactive?.dataset.cursor === "link") return applyState("link");
      if (el.closest("[data-dark-section]")) return applyState("dark");
      applyState("default");
    };

    const onOver = (e: MouseEvent) => resolveState(e.target);
    const onLeave = () => {
      visible = false;
      paint();
    };
    const onDown = () => {
      clicking = true;
      paint();
    };
    const onUp = () => {
      clicking = false;
      paint();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      aria-hidden
    >
      <div
        ref={ringRef}
        className="flex items-center justify-center rounded-full border-2 border-nova-teal transition-[width,height,box-shadow,border-color,background-color] duration-200 ease-out"
        style={{
          width: 20,
          height: 20,
          marginLeft: -10,
          marginTop: -10,
        }}
      >
        <span ref={arrowRef} className="hidden text-[10px] font-bold text-nova-teal">
          →
        </span>
      </div>
    </div>
  );
}
