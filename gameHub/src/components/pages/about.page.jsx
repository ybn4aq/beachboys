import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typer } from "../games/Typer.game";
import capy1 from "/images/capy1.png";
import capy2 from "/images/capy2.png";
import capy3 from "/images/capy3.png";
import "./about-css.css";

const beachBoys = [
  {
    name: "Larissa Cybyk",
    image: capy1,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at risus vel mauris lobortis commodo vel vitae nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at risus vel mauris lobortis commodo vel vitae nibh.",
  },
  {
    name: "Helen Yao",
    image: capy2,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at risus vel mauris lobortis commodo vel vitae nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at risus vel mauris lobortis commodo vel vitae nibh.",
  },
  {
    name: "Thomas Arnold",
    image: capy3,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at risus vel mauris lobortis commodo vel vitae nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at risus vel mauris lobortis commodo vel vitae nibh.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We're UVA '25 students studying Computer Science in the School of
        Engineering. The purpose of this project is to gain experience with the
        MERN stack and have fun while doing so! Enjoy your stay :)
      </p>
      <div className="team-row">
        {beachBoys.map((member, index) => (
          <div className="team-card" key={index}>
            <img
              src={member.image}
              alt={member.name}
              width={300}
              height={250}
            />
            <div className="card-content">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
