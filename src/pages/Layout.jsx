import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useLoaderData, Await, defer } from 'react-router-dom'
import { fetchCollectionData } from '../firebase/firebase'
import BottomNavbar from '../components/Navbar/BottomNavbar';
import NavBar from '../components/Navbar/NavBar';
import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';

export function loader(){
  return defer( { 
    footerData: fetchCollectionData("Footer"),
  } )
}


export default function Layout() {
  const data = useLoaderData()

  return (
    <div>
      <NavBar />
      <Outlet />
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data.footerData}>
        {(footerData) => <Footer footerData={footerData}/>}
        </Await>
      </Suspense>
      <BottomNavbar />
      <BackToTopButton />
    </div>
  );
};

