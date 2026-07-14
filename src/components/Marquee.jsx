export default function Marquee({ text = "Open to work", accent = "React.js" }) {
  const items = new Array(8).fill(null);
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((_, i) => (
          <span key={i}>
            {text} <em>{accent}</em>
          </span>
        ))}
      </div>
    </div>
  );
}
