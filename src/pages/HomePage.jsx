import React from 'react';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {

  return (
    <main className="container">
      <Profile/>
      <About />
      <Projects />
    </main>
  );
};

export default Home;