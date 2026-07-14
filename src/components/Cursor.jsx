import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("has-cursor");

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const onOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (!target || !ringRef.current) return;
      const kind = target.getAttribute("data-cursor");
      ringRef.current.classList.add(kind === "view" ? "is-view" : "is-hover");
      if (labelRef.current) labelRef.current.textContent = target.getAttribute("data-cursor-text") || "View";
    };

    const onOut = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (!target || !ringRef.current) return;
      ringRef.current.classList.remove("is-hover", "is-view");
    };

    let raf;
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef}>
        <span className="cursor-label" ref={labelRef}>
          View
        </span>
      </div>
    </>
  );
}
