import React from "react";
import Title from "./Title";
import { tours } from "../data";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map(
          ({ id, img, date, title, text, icon, location, days, price }) => {
            return (
              <article key={id} className="tour-card">
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon}></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{days} days</p>
                    <p>from {price}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}
