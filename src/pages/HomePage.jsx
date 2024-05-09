import React from 'react';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container">
      <Profile/>
      <About />
      <Projects />
    </main>
  );
};

export default Home;