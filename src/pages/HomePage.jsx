import React, {useEffect} from 'react';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import About from '../components/About';
import { motion  } from "framer-motion";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container">
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 10}}
        transition={{duration: 1.3}}> 
        <Profile/>
        <About />
        <Projects />
      </motion.div>
    </main>
  );
};

export default Home;