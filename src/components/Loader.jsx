import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const word = "AHSAN.DEV";

  return (
    <div className={`loader ${hide ? "hide" : ""}`}>
      <div className="loader-text">
        {word.split("").map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.045}s` }}>
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
}
