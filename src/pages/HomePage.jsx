import { useEffect, Suspense } from 'react';
import { useLoaderData, Await, defer } from 'react-router-dom'
import Profile from '../components/Hero/Profile';
import Projects from '../components/Projects/Projects';
import { fetchCollectionData } from '../firebase/firebase'
import About from '../components/About/About';
import { motion  } from "framer-motion";
import SkeletonProfile from '../components/Skeletons/SkeletonProfile'
import { Toaster } from 'react-hot-toast';

export function loader(){
  return defer( { 
    projects: fetchCollectionData("Projects"),
    skills: fetchCollectionData("skills"),
    headerData: fetchCollectionData("Header"),
  } )
}

export default function Home() {
  const data = useLoaderData()

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
        <Toaster
        position="top-center"
        reverseOrder={false}
      />
        <Suspense fallback={<SkeletonProfile/>}>
          <Await resolve={data.headerData}>
          {(headerData) => <Profile headerData={headerData}/>}
        </Await>
 
          <Await resolve={data.skills}>
            {(skills) => <About skills={skills} />}
          </Await>

          <Await resolve={data.projects}>
            {(projects) => <Projects ProjectsData={projects} />}
          </Await>
        </Suspense>
      </motion.div>
    </main>
  );
}

