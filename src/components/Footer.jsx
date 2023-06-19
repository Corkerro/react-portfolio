import React from 'react';

const Footer = ({ logo, ua_flag, usa_flag, data, eng_class, ua_class, langugaeState }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="" className="footer__logo">
          <img src={logo} alt="" />
          orker
        </a>
        <div className="footer__right">
          <ul className="footer__contacts">
            <li>
              {data.mail}
              <br />
              <a href="mailto:osenny.roman@gmail.com">osenny.roman@gmail.com</a>
            </li>
            <li>
              {data.telegram}
              <br />
              <a href="https://t.me/Corker5">@Corker5</a>
            </li>
          </ul>
          <div className="footer__languages">
            <button onClick={() => langugaeState('ua', false)} className={ua_class} type="button">
              <img src={ua_flag} alt="" />
            </button>
            <button onClick={() => langugaeState('en', true)} className={eng_class} type="button">
              <img src={usa_flag} alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
