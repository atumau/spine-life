import React from "react";
import Splinedata from "./splinedata";
import "./styles/features.css";

function Features() {
  return (
    <section className="features pt-3 mt-4">
      <h2 className="heading-explore">Explore Our Services</h2>
      {Splinedata.map((splineItem, index) => (
        <div key={index} className="spline-card">
          <h3 data-aos="zoom-in-up">{splineItem.heading}</h3>
          <p>{splineItem.Description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
