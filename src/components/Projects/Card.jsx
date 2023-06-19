import React from 'react';
import arrow from '../../assets/img/projects/arrow.png';
import LoadingImg from './LoadingImg';
import LoadingText from './LoadingText';
import LoadingAll from './LoadingAll';
import { useSelector } from 'react-redux';

const Card = ({ title, description, imgs, link, isLoading, data }) => {
  const [isAdaptive, setIsAdaptive] = React.useState(false);
  const langugaeState = useSelector((state) => state.language.language);
  React.useEffect(() => {
    const handleResize = () => {
      setIsAdaptive(window.innerWidth <= 1165); // Изменить пороговое значение для мобильных устройств
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardImgs = (
    <>
      <a href={link}>
        <img src={imgs[0]} alt="main img" className="project__main" />
      </a>
      <img src={imgs[1]} alt="first img" className="project__first" />
      <img src={imgs[2]} alt="second img" className="project__second" />
    </>
  );
  const cardInner = (
    <div className="projects__card_right__inner">{isLoading ? <LoadingImg /> : cardImgs}</div>
  );
  const cardText = (
    <>
      <h4>{title}</h4>
      {isAdaptive && cardInner}
      <p>{description[langugaeState]}</p>
      <a href={link}>
        {data} <img src={arrow} alt="" />
      </a>
    </>
  );

  let loadingData;
  if (isAdaptive) {
    loadingData = <LoadingAll />;
  } else {
    loadingData = <LoadingText />;
  }

  return (
    <div className="projects__card">
      <div className="projects__card_left">{isLoading ? loadingData : cardText}</div>
      {!isAdaptive && <div className="projects__card_right">{cardInner}</div>}
    </div>
  );
};

export default Card;
