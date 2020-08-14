import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import GameTitle from '../../components/GameTitle/GameTitle';
import Card from '../../components/Card/Card';
import GameLogoComponent from '../../components/GameLogoComponent/GameLogoComponent';
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Footer from '../../components/FooterComponent/FooterComponent';


export const PickLevelPage = () => (
  <section className="home bodycontainer">
    <div className="bodywrapper">
      <div className="homelogocontainer">
        <div className="homelogo">
          <GameLogoComponent />
        </div>
        <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
        <div className="forkimage">
          <ForkImageComponent />
        </div>
        <GameTitle title="Smørrebrød" />

        <span className="easy-hard-position">
          <Link to="/game-page">
            <Card text="Easy" image="" />
          </Link>

          <Link to="/game-page">
            <Card text="Hard" image="" />
          </Link>
        </span>

        <SpoonImageComponent />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </section>
);
