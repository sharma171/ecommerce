import React from 'react';
import './Hero.css';
import adminimg from './bhanuweb.png';
import reactanim from './reactanim.mp4';
import jsanim from './jsanim.mp4';
import reactlogo from './reactlogo.svg'
import navicon from './images/navright.svg';
import fbicon from './images/fb.svg';
import instaicon from './images/insta.svg';
import linicon from './images/linkedin.svg';
import youtubeicon from './images/youtube.svg';

const arrows1 = "<";
const slash = "/";

const arrows2 = ">";

const Hero = () => {
  return <div id="hero">
    <div className="grid outershadow flex-box-column">
      <div className="cards">
        <div className="admin">
          <img src={adminimg} alt="adminimg" />
        </div>
        <div className="adminname flex-box-column">
          <h3>{arrows1}BHANU SHARMA{arrows2}</h3>
          <span>Front-end Web Developer</span>
        </div>
        <div className="animlogo">
          <div className="logo">
            <video className="reactrot" src={reactanim} alt="react animation" playsInline autoPlay muted loop />
            <img src={reactlogo} alt="logo" />
          </div>
          <div className="logo">
            <video className="jspop" src={jsanim} alt="js animation" playsInline autoPlay muted loop />
          </div>
        </div>
        <div className="admininfo">
          <p>Creating Interactive <strong>UI/UX</strong><br /> Delivering Best User Experiences</p>
        </div>
        <a href="https://mail.google.com/mail/u/0/?to=sharmabhanu171@gmail.com&bcc=innovationonlineindia@gmail.com&subject=Hey#inbox?compose=new" className="flex-box-column">
          <button type='button' className="testiconbutton">
            <span>email me</span> <img src={navicon} alt='buttonnav' />
          </button></a>
        <div className="flex-box-row">
          <div className="icon">
            <img src={instaicon} alt="instagram" />
          </div>
          <div className="icon">
            <img src={fbicon} alt="socialicon" />
          </div>
          <div className="icon">
            <img src={linicon} alt="socialicon" />
          </div>
          <div className="icon">
            <img src={youtubeicon} alt="socialicon" />
          </div>
        </div>
      </div>
    </div>
    <div className="grid bgcolor flex-box-column">
      <div className="card">
        <div className="flex-box-row">
          <h2>{arrows1} {slash} About Me {arrows2}</h2>
        </div>
        <div className="flex-box-column">
          <p align="justify">As a highly motivated and skilled web developer, I have a passion for creating dynamic and engaging user experiences. With extensive knowledge of HTML, CSS, and JavaScript, I am able to build fast, responsive, and beautiful websites. My experience with React JS and Next JS has allowed me to develop high-performance web applications that meet the needs of my clients. I have a strong commitment to writing clean, maintainable code and following best practices in web development. I am always eager to learn new technologies and expand my skill set, and I take pride in delivering high-quality results in a timely and efficient manner.</p>
          <div className="flex-box-column">
            <a href="/product/:id">
          <button type='link' className="testiconbutton">
            <span>experience portfolio</span> <img src={navicon} alt='buttonnav' />
          </button></a></div>
        </div>
      </div>
    </div>
  </div>;
};

export default Hero;
