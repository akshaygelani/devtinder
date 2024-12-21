import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { API_BASE_URL } from '../utils/constants';
import { addUser, removeUser } from '../store/slices/user';
import NavBar from './navbar';
import Footer from './footer';

function Body() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const verifyProfile = async () => {
    if (!user) {
      try {
        const res = await axios.get(API_BASE_URL + '/profile', { withCredentials: true });
        dispatch(addUser(res?.data?.data[0]));
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    if (pathname === '/signup') return;
    if (!Cookies.get('access_token')) {
      dispatch(removeUser());
      navigate('/signin');
      return;
    }
    verifyProfile();

    if (pathname === '/') navigate('/feed');

    const intervalId = setInterval(() => {
      if (!Cookies.get('access_token')) {
        dispatch(removeUser());
        navigate('/signin');
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <div className='font-akshay md:max-w-4xl flex items-center flex-col m-auto h-screen'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Body;
