import React from 'react';
import ReactImg from '../assets/img/skills/React.svg';
import HtmlImg from '../assets/img/skills/Html.svg';
import CssImg from '../assets/img/skills/Css.svg';
import JsImg from '../assets/img/skills/JS.svg';
import NodeJSImg from '../assets/img/skills/NodeJS.svg';
import PythonImg from '../assets/img/skills/Python.svg';
import GithubImg from '../assets/img/skills/Github.svg';
import FigmaImg from '../assets/img/skills/Figma.svg';

const Skills = () => {
  return (
    <div className="skills" id="_Skills">
      <div className="skills__container">
        <h1 data-aos="fade-up">Skills</h1>
        <div data-aos="fade-up" className="skills__block">
          <a href="https://reactjs.org/" className="skills__card">
            <div className="skills__card_inner">
              <img src={ReactImg} alt="" />
              <p>React</p>
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/HTML" className="skills__card">
            <div className="skills__card_inner">
              <img src={HtmlImg} alt="" />
              <p>Html</p>
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/CSS" className="skills__card">
            <div className="skills__card_inner">
              <img src={CssImg} alt="" />
              <p>Css</p>
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/JavaScript" className="skills__card">
            <div className="skills__card_inner">
              <img src={JsImg} alt="" />
              <p>JS</p>
            </div>
          </a>
          <a href="https://nodejs.org/en" className="skills__card">
            <div className="skills__card_inner">
              <img src={NodeJSImg} alt="" />
              <p>Node JS</p>
            </div>
          </a>
          <a href="https://www.python.org/" className="skills__card">
            <div className="skills__card_inner">
              <img src={PythonImg} alt="" />
              <p>Python</p>
            </div>
          </a>
          <a href="https://github.com/" className="skills__card">
            <div className="skills__card_inner">
              <img src={GithubImg} alt="" />
              <p>Github</p>
            </div>
          </a>
          <a href="https://www.figma.com/" className="skills__card">
            <div className="skills__card_inner">
              <img src={FigmaImg} alt="" />
              <p>Figma</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
