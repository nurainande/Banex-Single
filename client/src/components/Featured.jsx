import React from 'react'

const Featured = () => {
  return (
    <section className="featured">
      <div className="box1">
        <p>Audio</p>
        <img src="/Audio_img.jpg" alt="" />
      </div>

      <div style={{display:'flex', gap:'1rem'}}>
        <div className="box1">
          <p>Power</p>
          <img src="/Power_img.jpg" alt="" />
        </div>
        <div className="box1">
          <p>Power</p>
          <img src="/Power_img.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Featured