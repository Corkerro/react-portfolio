import Header from './components/Header';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects/';
import Contacts from './components/Contacts';
import ua_flag from './assets/img/ukraine.svg';
import usa_flag from './assets/img/usa.svg';
import logo from './assets/img/logo.svg';
import Footer from './components/Footer';
import data from './languages.json';
import { useDispatch } from 'react-redux';
import { setLanguage } from './redux/slices/languageSlice';

function MainSite() {
  const headerState = useSelector((state) => state.headerStatus.status);
  const langugaeState = useSelector((state) => state.language.language);
  const isFirst = React.useRef(true);
  const [isEn, setIsEn] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!isFirst.current) {
      document.querySelector('html').classList.toggle('menu-open');
      document.querySelector('html').classList.toggle('lock');
    }
    isFirst.current = false;
  }, [headerState]);

  const isTouchDevice = () => {
    return (
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    );
  };
  React.useEffect(() => {
    document.querySelector('html').lang = langugaeState;
    if (isTouchDevice()) {
      document.querySelector('html').classList.add('mobile');
    }
  }, []);
  React.useEffect(() => {
    document.querySelector('html').lang = langugaeState;
  }, [langugaeState]);

  const newLanguage = (language, bool) => {
    dispatch(setLanguage(language));
    setIsEn(bool);
  };
  return (
    <>
      <Header
        logo={logo}
        ua_flag={ua_flag}
        usa_flag={usa_flag}
        langugaeState={newLanguage}
        data={data[0][langugaeState]['header']}
        eng_class={isEn ? '_active' : ''}
        ua_class={isEn ? '' : '_active'}
      />
      <main className="page">
        <Main data={data[0][langugaeState]['main']} />
        <Skills />
        <Projects data={data[0][langugaeState]['projects']} />
        <Contacts data={data[0][langugaeState]['contacts']} />
      </main>
      <Footer
        data={data[0][langugaeState]['footer']}
        logo={logo}
        ua_flag={ua_flag}
        usa_flag={usa_flag}
        langugaeState={newLanguage}
        eng_class={isEn ? '_active' : ''}
        ua_class={isEn ? '' : '_active'}
      />
    </>
  );
}

export default MainSite;
