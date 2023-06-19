import React from 'react';
import DiscordImg from '../assets/img/contacts/Discord.svg';
import TelegramImg from '../assets/img/contacts/Telegram.svg';
import GithubImg from '../assets/img/contacts/Github.svg';

const Contacts = ({ data }) => {
  return (
    <div className="contacts" id="_Contacts">
      <div className="contacts__container">
        <h1 data-aos-anchor=".contacts" data-aos="fade-up">
          Contacts
        </h1>
        <div data-aos-anchor=".contacts" data-aos="fade-up" className="contacts__inner">
          <div className="contacts__top">
            <a href="example.com" className="contacts__card">
              <div className="contacts__card_inner">
                <img src={DiscordImg} alt="" />
                <p>Discord</p>
              </div>
            </a>
            <a href="example.com" className="contacts__card">
              <div className="contacts__card_inner">
                <img src={TelegramImg} alt="" />
                <p>Telegram</p>
              </div>
            </a>
            <a href="example.com" className="contacts__card">
              <div className="contacts__card_inner">
                <img src={GithubImg} alt="" />
                <p>Github</p>
              </div>
            </a>
          </div>
          <form className="contacts__form">
            <input type="email" placeholder="example@mail.com" />
            <input className="button" type="submit" value={data} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
