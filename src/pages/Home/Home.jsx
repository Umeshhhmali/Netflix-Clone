import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards';
import Footer from '../../components/Footer/Footer'



const Home  = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.</p>
          <div className="hero-btns">
            <button className="btn"><img src={play_icon} alt="" />Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
        <Titlecards title={"Only on Netflix"} category={"popular"}/>
        <Titlecards title={"Upcoming"} category={"upcoming"}/>
        <Titlecards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home