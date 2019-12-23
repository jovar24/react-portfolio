import React from "react";
import Aboutimg from "../../../static/assets/images/about/ProfilePic.jpg";
export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${Aboutimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <h1>About me</h1>
        <h2>I am a full stack developer from Salt Lake City, UT</h2>
        <h4>
          I enjoy solving problems and working with algorithms, I enjoy learning
          new techniques and strategies. I also have the logic and structure of
          coding and always strive to write elegant and efficient code. I
          continuously expand my network and knowledge by attending meetups and
          researching and working on projects as well.
        </h4>
        <h4>
          When I am not coding you’ll find me in the gym, or out playing soccer
          with my friends.
        </h4>
      </div>
    </div>
  );
}
