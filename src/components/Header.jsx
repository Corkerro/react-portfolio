import React from 'react';
import { Link } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { headerToggle, headerClose } from '../redux/slices/headerSlice';
import Aos from 'aos';

const Header = ({ logo, ua_flag, usa_flag, langugaeState, data, eng_class, ua_class }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(headerClose());
  };
  const toggleMenu = () => {
    dispatch(headerToggle());
  };

  React.useEffect(() => {
    Aos.init();
  }, [langugaeState]);

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const indexes = ['Home', 'Skills', 'Projects', 'Contacts'];
  const headerClassName = isScrolled ? 'header scrolled' : 'header';
  return (
    <header className={headerClassName}>
      <div className="header__container">
        <Link
          to={`_${indexes[0]}`}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => handleClick()}
          className="header__logo">
          <span>
            <img src={logo} alt="logo" />
            orker
          </span>
        </Link>
        <div className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="menu__item"
                  data-aos="fade-right"
                  data-aos-delay={50 * (index + 1)}>
                  <Link
                    to={`_${indexes[index]}`}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => handleClick()}
                    className="menu__link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header__languages">
          <span>
            <button
              data-aos="fade-left"
              data-aos-delay={100}
              onClick={() => langugaeState('ua', false)}
              className={ua_class}
              type="button">
              <img src={ua_flag} alt="" />
            </button>
            <button
              data-aos="fade-left"
              data-aos-delay={150}
              onClick={() => langugaeState('en', true)}
              className={eng_class}
              type="button">
              <img src={usa_flag} alt="" />
            </button>
          </span>

          <button
            data-aos="fade-left"
            data-aos-delay={200}
            onClick={toggleMenu}
            type="button"
            className="menu__icon icon-menu">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
