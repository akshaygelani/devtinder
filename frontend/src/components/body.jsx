import { Outlet } from 'react-router';
import NavBar from './navbar';
import Footer from './footer';

function Body() {
  return (
    <div className='font-akshay'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Body;
