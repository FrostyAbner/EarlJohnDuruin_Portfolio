import { useState } from "react";

export default function Timeline({ items, labelField }) {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <div className="timeline">
        {items.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="tl-left">
              <div className="tl-dot" />
              {i < items.length - 1 && <div className="tl-line" />}
            </div>
            <div className="tl-content">
              <span>{item[labelField] || "Certified"}</span>
              <h3>{item.degree || item.name}</h3>
              <p>{item.school || item.desc}</p>
              {item.img && (
                <button className="cert-view-btn" onClick={() => setPreview(item.img)}>
                  🪪 View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="cert-lightbox" onClick={() => setPreview(null)}>
          <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close" onClick={() => setPreview(null)}>✕</button>
            <img src={preview} alt="Certificate" />
          </div>
        </div>
      )}
    </>
  );
}
