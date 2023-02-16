import React from 'react';
import '../components/Header.css';
import homelogo from './home.svg';
import portfolio from './portfolio.png';
import callus from './callus.png'

const Header = () => {
  return <div id="header">
    <a href="/" className="icons">
      <img src={ homelogo } alt="homenav" />
    </a>
    <a href="/portfolio" className="icons">
      <img src={ portfolio } alt="portfolio" />
      </a>
    <a href="https://mail.google.com/mail/u/0/?to=sharmabhanu171@gmail.com&bcc=innovationonlineindia@gmail.com&subject=Hey#inbox?compose=new" className="icons">
      <img src={ callus } alt="Callus" />
    </a>
  </div>;
};

export default Header;
