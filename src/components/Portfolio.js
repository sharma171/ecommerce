import React from 'react';
import './portfolio.css';
import gulfcans from './images/gulfcans.png';
import isocape from './images/isocape.png';
import crsplcons from './images/crspl.png';
import crspltech from './images/crsplio.png';
import navicon from './images/navright.svg';

const Portfolio = () => {
  return <div className="flex-box-column">
    <div className="pagename"><h1>My Portfolio</h1></div>
    <div className="flex-container">
      <div className="cards">
        <div className="portfolioimg">
          <img src={isocape} alt="isocape" />
          <div className='hoverpopup flex-box-row'><a href="https://www.isocape.com/" className="flex-box-row"><h3>Go to website </h3><img src={navicon} alt="next-nav" className="sitenav" /></a></div>
        </div>
      </div>
      <div className="cards">
        <div className="portfolioimg">
          <img src={gulfcans} alt="gulfcans" />
          <div className='hoverpopup flex-box-row'><a href="https://www.gulfcans.com/" className="flex-box-row"><h3>Go to website </h3><img src={navicon} alt="next-nav" className="sitenav" /></a></div>
        </div>
      </div>
      <div className="cards">
        <div className="portfolioimg">
          <img src={crsplcons} alt="crspl cosultant" />
          <div className='hoverpopup flex-box-row'><a href="https://www.crspl.in/" className="flex-box-row"><h3>Go to website </h3><img src={navicon} alt="next-nav" className="sitenav" /></a></div>
        </div>
      </div>
      <div className="cards">
        <div className="portfolioimg">
          <img src={crspltech} alt="crspl technology" />
          <div className='hoverpopup flex-box-row'><a href="https://www.crspl.io/" className="flex-box-row"><h3>Go to website </h3><img src={navicon} alt="next-nav" className="sitenav" /></a></div>
        </div>
      </div>
    </div>
  </div>;
};

export default Portfolio;
