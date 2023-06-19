import React from 'react';
import { Link } from 'react-scroll';
const Main = ({ data }) => {
  return (
    <div className="main" id="_Home">
      <div className="main__container">
        <div data-aos="fade-up" className="main__inner">
          <h1>
            {data.title} <span>Corker</span>
          </h1>
          <p>{data.subtitle}</p>
          <Link
            to={`_Projects`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href="#_"
            className="button">
            {data.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
