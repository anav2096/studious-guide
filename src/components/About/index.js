import React from 'react';
import coverImage from '../../assets/cover/futurebackground.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Aaron's Portfolio</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          New to coding. Excited to be here.
        </p>
      </div>
    </section>
  );
}

export default About;