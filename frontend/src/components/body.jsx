import { Outlet } from 'react-router';
import NavBar from './navbar';
import Footer from './footer';

function Body() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default Body;
