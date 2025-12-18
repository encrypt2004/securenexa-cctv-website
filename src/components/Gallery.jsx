import React from "react";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="section section-alt"
      aria-labelledby="gallery-h"
    >
      <div className="container">
        <div className="section-header">
          <h2 id="gallery-h">Office &amp; Work Photos</h2>
          <p>
            Preview of our workspace and on-site installation work. Replace these
            placeholders with real photos later.
          </p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder">Office Photo</div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">Installation Work Photo</div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">CCTV Setup Photo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


